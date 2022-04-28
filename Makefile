SHELL := /bin/bash
.DEFAULT_GOAL = help

COMPOSE = docker compose -f docker-compose.yml
DOCKER_EXEC = docker compose exec
DOCKER_EXEC_NODE = ${DOCKER_EXEC} ${CTNR_NODE}

CTNR_NODE = node-api-service

.PHONY: help
# Show this help message
help:
	@cat $(MAKEFILE_LIST) | docker run --rm -i xanders/make-help

.PHONY: start
# start project
start : up perm

##
## Docker
##

.PHONY: up
# Build docker image
up: kill
	${COMPOSE} up -d --build

.PHONY: kill
# kill all containers
kill:
	docker kill $$(docker ps -q) || true

.PHONY: node-bash
# Run shell inside php-container
node-bash:
	${DOCKER_EXEC_NODE} ${SHELL}

.PHONY: clean
# Clean all, warning all volumes and networks will be delete
clean:
	docker stop $$(docker ps -a -q)
	docker rm $$(docker ps -a -q)
	docker volume prune
	docker network prune

##
## NPM
##
NPM = ${DOCKER_EXEC_NODE} npm
YARN = ${DOCKER_EXEC_NODE} yarn

.PHONY: npm
# Npm in node-container with your command, c='{value}''
npm:
	${NPM} $(c)

.PHONY: yarn
# Yarn in node-container with your command, c='{value}''
yarn:
	${YARN} $(c)

.PHONY: yarn-i
# Install node modules with yarn
yarn-i:
	${YARN} install

.PHONY: yarn-u
# Upgrade node modules with your command, c='{value}''
yarn-u:
	${YARN} upgrade $(c)

.PHONY: yarn-uall
# Upgrade all node modules with yarn
yarn-uall:
	${YARN} yarn-upgrade-all

.PHONY: ys
# Yarn in node-container start project
ys:
	${YARN} start

.PHONY: yb
# Yarn in node-container build project
yb:
	${YARN} build

.PHONY: init
init:
	${DOCKER_EXEC_NODE} node ace init

.PHONY: list-routes
list-routes:
	${DOCKER_EXEC_NODE} node ace list:routes

.PHONY: perm
# Fix permissions of all files
perm:
	sudo chown -R www-data:$(USER) .
	sudo chmod -R g+rwx .

.PHONY: purge
# Purge cache and logs
purge:
	sudo rm -rf var/cache/* var/logs/*

.PHONY: bundles
# Display all commands in the project namespace
bundles: yarn-i

##
## Yarn
##

.PHONY: yarn-lint
# Run yarn lint
yarn-lint:
	${YARN} lint

.PHONY: yarn-lint-fix
# Run yarn lint
yarn-lint-fix:
	${YARN} lint-and-fix
