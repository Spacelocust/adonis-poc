# adonis-poc
API REST made with the node.js framework AdonisJS,

## Features

Manage Directors and Movies

## Install

Run these commands in your terminal :

1. Clone project `git clone git@github.com:Spacelocust/adonis-poc.git`
2. Go in project `cd %PROJECT_PATH%\adonis-poc`
3. Start project `make start`
4. Run `make init` (if command fail try it again)
5. Go to [http://localhost:3000](http://localhost:3000) in your web browser

PhpMyAdmin is already and accessible on [http://localhost:8080](http://localhost:8080)

In case if you don't have build-essential package installed
replace make commands by:

- `make start` by `docker compose -f docker-compose.yml up -d --build`
- `make init` by `docker compose exec node-api-service node ace init`

## API Routes

If you want to see all routes, run `make list-routes` or `docker compose exec node-api-service node ace list-routes`

Each routes are prefixed with `api/`

Directors's routes:
- `GET /api/directors`
- `GET /api/directors/:id`
- `POST /api/directors/add`
- `PATCH /api/directors/:id/edit`
- `DELETE /api/directors/:id/delete`

Movies's routes:
- `GET /api/movies`
- `GET /api/movies/:id`
- `POST /api/movies/add`
- `PATCH /api/movies/:id/edit`
- `DELETE /api/movies/:id/delete`


## Dependencies for running project
Docker is required to run the project.
- Docker v20.10
- Docker Compose v2.2.3
- build-essential v9.4.0 (if you want to use make commands)

## Dependencies for running without Docker/Docker compose
- node v17.7.1
- mysql v8.0
- nginx --latest or apache2 --latest
- yarn v1.22.7

## Author

- [Lucas](https://github.com/Spacelocust/) - Web Developer FullStack
