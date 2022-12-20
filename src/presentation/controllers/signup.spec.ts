import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'teste@email.com',
        password: 'teste_password',
        passawordConfirmation: 'teste_passaword'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
})

describe('SignUp Controller', () => {
  test('Should return 400 if no email is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'teste_name',
        password: 'teste_password',
        passawordConfirmation: 'teste_passaword'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
})

describe('SignUp Controller', () => {
  test('Should return 400 if no password is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'teste_name',
        email: 'teste@email.com',
        passawordConfirmation: 'teste_passaword'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
})

describe('SignUp Controller', () => {
  test('Should return 400 if no passawordConfirmation is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'teste_name',
        email: 'teste@email.com',
        password: 'teste_passaword'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passawordConfirmation'))
  })
})
