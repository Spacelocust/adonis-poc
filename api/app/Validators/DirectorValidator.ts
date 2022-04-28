import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DirectorValidator {
  constructor(protected ctx: HttpContextContract) {
  }

  // Validation for all field of Director Model
  public schema = schema.create({
    firstName: schema.string({ trim: true }, [
      rules.required()
    ]),
    lastName: schema.string({ trim: true }, [
      rules.required()
    ]),
    age: schema.number([
      rules.required()
    ]),
    birthdate: schema.date({ format: 'yyyy-MM-dd' }, [
      rules.required()
    ]),
    nationality: schema.string({ trim: true }, [
      rules.required()
    ]),
  })

  // Error message for all field
  public messages = {
    'firstName.required': 'First name is required',
    'lastName.required': 'Last name is required',
    'age.required': 'Age is required',
    'birthdate.required': 'Birth date is required',
    'birthdate.date.format': 'Birth date need to be in the format yyyy-MM-dd',
    'nationality.required': 'Nationality is required'
  }
}
