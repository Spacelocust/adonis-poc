import { DateTime } from 'luxon';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Director from "App/Models/Director";

export default class DirectorSeederSeeder extends BaseSeeder {
  public async run() {
    await Director.createMany([
      {
        firstName: 'Steven',
        lastName: 'Spielberg',
        age: 75,
        birthdate: DateTime.fromFormat('1946-08-17', 'yyyy-MM-dd'),
        nationality: 'american'
      },
      {
        firstName: 'Quentin',
        lastName: 'Tarantino',
        age: 59,
        birthdate: DateTime.fromFormat('1963-03-27', 'yyyy-MM-dd'),
        nationality: 'american'
      }
    ])
  }
}
