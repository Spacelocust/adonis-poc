import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Movie from "App/Models/Movie";
import MovieValidator from "App/Validators/MovieValidator";

// #[route('/api/movies')]
export default class MovieController {

  // #[route('/'), get all movies]
  public async index ({ response }: HttpContextContract) {
    const movies = await Movie.query().preload('director')

    return response.json(movies)
  }

  // #[route('/:id'), get one movie]
  public async show ({ params, response }: HttpContextContract) {
    const movie = await Movie.query().preload('director').where('id', params.id).firstOrFail()

    return response.json(movie)
  }

  // #[route('/add'), add a new movie]
  public async store ({ request, response }: HttpContextContract) {
    const movie = new Movie();
    const data = await request.validate(MovieValidator);
    await movie
      .fill(data)
      .save();

    return response.json(movie)
  }

  // #[route('/:id/edit'), edit a movie]
  public async update ({ params, request, response }: HttpContextContract) {
    const movie = await Movie.firstOrFail(params.id)
    const data = await request.validate(MovieValidator)
    await movie
      .merge({ ...movie, ...data})
      .save()

    return response.json(movie)
  }

  // #[route('/:id/delete'), delete a movie]
  public async destroy ({ params, response }: HttpContextContract) {
    const movie = await Movie.findOrFail(params.id)
    await movie.delete()

    return response.json({
      message: 'Movie deleted successfully'
    })
  }
}
