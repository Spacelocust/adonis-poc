import { DateTime } from 'luxon';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Movie from "App/Models/Movie";

export default class MovieSeederSeeder extends BaseSeeder {
  public async run () {
    await Movie.createMany([
      {
        title: 'E.T',
        description: 'A troubled child summons the courage to help a friendly alien escape from his home.',
        dateReleased: DateTime.fromFormat('1982-05-25', 'yyyy-MM-dd'),
        directorId: 1,
      },
      {
        title: 'Catch Me If You Can',
        description: 'The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars from the mob.',
        dateReleased: DateTime.fromFormat('2002-12-25', 'yyyy-MM-dd'),
        directorId: 1,
      },
      {
        title: 'Django Unchained',
        description: 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
        dateReleased: DateTime.fromFormat('2012-12-25', 'yyyy-MM-dd'),
        directorId: 2,
      },
      {
        title: 'Kill Bill: Vol. 1',
        description: 'The Bride wakens from a four-year coma. The child she carried in her womb is gone. Now she must wreak vengeance on the team of assassins who betrayed her - a team she was once part of.',
        dateReleased: DateTime.fromFormat('2003-12-25', 'yyyy-MM-dd'),
        directorId: 2,
      },
    ])
  }
}
