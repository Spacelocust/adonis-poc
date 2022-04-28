import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MovieValidator {
  constructor(protected ctx: HttpContextContract) {}

  // Validation for all field of Director Model
  public schema = schema.create({
    title: schema.string({ trim: true }, [
      rules.required()
    ]),
    description: schema.string({ trim: true }, [
      rules.required()
    ]),
    dateReleased: schema.date({ format: 'yyyy-MM-dd' }, [
      rules.required()
    ]),
    directorId: schema.number( [
      rules.required(),
      rules.exists({ table: 'directors', column: 'id' })
    ]),
  })

  // Error message for all field
  public messages = {
    'title.required': 'Title is required',
    'description.required': 'Description is required',
    'dateReleased.required': 'Date released is required',
    'dateReleased.date.format': 'Date released need to be in the format yyyy-MM-dd',
    'directorId.required': 'Director id is required',
    'directorId.exists': 'Choose director from the list',
  }
}
