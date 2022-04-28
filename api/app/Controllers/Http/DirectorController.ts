import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Director from "App/Models/Director";
import DirectorValidator from "App/Validators/DirectorValidator";

// #[route('/api/directors')]
export default class DirectorController {

  // #[route('/'), get all directors]
  public async index ({ response }: HttpContextContract) {
    const directors = await Director.query().preload('movies')

    return response.json(directors)
  }

  // #[route('/:id'), get one director]
  public async show ({ params, response }: HttpContextContract) {
    const director = await Director.query().preload('movies').where('id', params.id).firstOrFail()

    return response.json(director)
  }

  // #[route('/add'), add a new director]
  public async store ({ request, response }: HttpContextContract) {
    const director = new Director()
    const data = await request.validate(DirectorValidator)
    await director
      .fill(data)
      .save()

    return response.json(director)
  }

  // #[route('/:id/edit'), edit a director]
  public async update ({ params, request, response }: HttpContextContract) {
    const director = await Director.firstOrFail(params.id)
    const data = await request.validate(DirectorValidator)
    await director
      .merge({ ...director, ...data})
      .save()

    return response.json(director)
  }

  // #[route('/:id/delete'), delete a director]
  public async destroy ({ params, response }: HttpContextContract) {
    const director = await Director.findOrFail(params.id)
    await director.delete()

    return response.json({
      message: 'Director deleted successfully'
    })
  }
}
