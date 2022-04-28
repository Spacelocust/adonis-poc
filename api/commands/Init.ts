import { BaseCommand } from '@adonisjs/core/build/standalone'

const util = require('util')
const exec = util.promisify(require('child_process').exec)

export default class Init extends BaseCommand {
  public static commandName = 'init'

  public static description = 'Run all migrations and seeders'

  public static settings = {
    loadApp: false,
    stayAlive: false,
  }

  public async commmand(msg, cmd) {
    const spinner = this.logger.await(msg, undefined, cmd)
    const { stdout } = await exec(cmd)
    spinner.stop()
    this.logger.info(stdout)
  }

  public async run() {
    try {
      await this.commmand('Running migrations', 'node ace migration:run')
      await this.commmand('Running seeds', 'node ace db:seed')

      this.logger.success('Database and seeds up !')
    } catch ({ message }) {
      this.logger.error(message)
    }
  }
}
