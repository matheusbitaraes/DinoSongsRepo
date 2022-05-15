const policy = require('./AuthenticationControllerPolicy')

describe('Policy test', () => {
    
        
    let getEmptyResponse = () => {
        let mockResponse = {
            status: (msg) => {
                mockResponse.status_val = msg
                return mockResponse
            },
            status_val: null,
            json: () => mockResponse,
            send: (msg) => {
                mockResponse.body = msg
                return mockResponse
            },
            body: null
          }
        return mockResponse
    }
    
    let mockRequest = {
        body: {email:"", password:""}
    }

    test('Test Invalid E-mail input', () => {

        mockRequest.body = {email:"bliu", password:"blu"}
        let response = getEmptyResponse()
        policy.register(mockRequest, response, () => {})
        expect(response.body).toStrictEqual({error: "You must provide a valid email address"})
        expect(response.status_val).toBe(400)
    })

    test('Test Invalid password input', () => {

        mockRequest.body = {email:"bliu@bueba.com", password:"blu"}
        let response = getEmptyResponse()
        policy.register(mockRequest, response, () => {})
        expect(response.body).toStrictEqual({error:`The password provided must be from 8 to 32 characters and must contain ONLY the following characters: lower case, upper case, numerics`})
        expect(response.status_val).toBe(400)
    })

    test('Test valid input', () => {

        mockRequest.body = {email:"bliu@bueba.com", password:"1232432Blueb"}
        let response = getEmptyResponse()
        policy.register(mockRequest, response, () => {})
        expect(response.status_val).toBe(null)
    })
})