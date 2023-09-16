import 'cypress-plugin-api'

const { expect } = require("chai").use(require('chai-json-schema'));


const ObjectSchema =
{
    "type": "object",
    "properties": {
        "page": {
            "type": "integer"
        },
        "per_page": {
            "type": "integer"
        },
        "total": {
            "type": "integer"
        },
        "total_pages": {
            "type": "integer"
        },
        "data": {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "email": {
                            "type": "string"
                        },
                        "first_name": {
                            "type": "string"
                        },
                        "last_name": {
                            "type": "string"
                        },
                        "avatar": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id",
                        "email",
                        "first_name",
                        "last_name",
                        "avatar"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "email": {
                            "type": "string"
                        },
                        "first_name": {
                            "type": "string"
                        },
                        "last_name": {
                            "type": "string"
                        },
                        "avatar": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id",
                        "email",
                        "first_name",
                        "last_name",
                        "avatar"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "email": {
                            "type": "string"
                        },
                        "first_name": {
                            "type": "string"
                        },
                        "last_name": {
                            "type": "string"
                        },
                        "avatar": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id",
                        "email",
                        "first_name",
                        "last_name",
                        "avatar"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "email": {
                            "type": "string"
                        },
                        "first_name": {
                            "type": "string"
                        },
                        "last_name": {
                            "type": "string"
                        },
                        "avatar": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id",
                        "email",
                        "first_name",
                        "last_name",
                        "avatar"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "email": {
                            "type": "string"
                        },
                        "first_name": {
                            "type": "string"
                        },
                        "last_name": {
                            "type": "string"
                        },
                        "avatar": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id",
                        "email",
                        "first_name",
                        "last_name",
                        "avatar"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "email": {
                            "type": "string"
                        },
                        "first_name": {
                            "type": "string"
                        },
                        "last_name": {
                            "type": "string"
                        },
                        "avatar": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id",
                        "email",
                        "first_name",
                        "last_name",
                        "avatar"
                    ]
                }
            ]
        },
        "support": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string"
                },
                "text": {
                    "type": "string"
                }
            },
            "required": [
                "url",
                "text"
            ]
        }
    },
    "required": [
        "page",
        "per_page",
        "total",
        "total_pages",
        "data",
        "support"
    ]
}



describe('APIs smoke tests', function () {

    it('Get users', () => {
        cy.api(
            'GET',
            Cypress.env("apiUrl") + '/users')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.be.jsonSchema(ObjectSchema);

                assert.isArray(response.body.data, 'Response is an array')
            })
    })



    it('Get Delayed ', () => {
        cy.api(
            'GET',
            Cypress.env("apiUrl") + '/users?delay=5')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.be.jsonSchema(ObjectSchema)
                assert.isArray(response.body.data, 'Response is an array')
                expect(response.duration).to.not.be.greaterThan(5000)
            })
    })


    it('Unsuccesful Login ', () => {
        cy.api({
            method: 'POST',
            url: Cypress.env("apiUrl") + '/login', failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body).to.have.property('error', 'Missing email or username')
            })
    })

    it('Delete User ', () => {
        cy.api({
            method: 'DELETE',
            url: Cypress.env("apiUrl") + '/users/2', failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                cy.log(response.body)
            })
    })





})
