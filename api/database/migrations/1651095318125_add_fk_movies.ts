import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddFkMovies extends BaseSchema {
  public async up () {
    this.schema.alterTable('movies', (table) => {
      table
        .integer('director_id')
        .unsigned()
        .references('directors.id')
        .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.alterTable('movies', (table) => {
      table.dropColumn('director_id')
    })
  }
}
