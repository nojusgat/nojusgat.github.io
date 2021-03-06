var faker = require('faker');

describe('Register page testing', function () {

    it('Fail at register, do not select gender field', function () {
        const randomFirstName = faker.name.firstName()
        const randomLastName = faker.name.lastName()
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password(8);

        //const genders = ['Male', 'Female', 'Other']

        //const randomGender = faker.random.arrayElement(genders);
        
        cy.visit('http://127.0.0.1:8000/signup')
        //cy.get('.navbar-nav').contains('Home').click()

        cy.intercept('/api/auth/register').as('responseRegister');

        cy.get('form').within(() => {
            cy.get('input[id="firstname"]')
            .type(randomFirstName)
            .should('have.value', randomFirstName)

            cy.get('input[id="lastname"]')
            .type(randomLastName)
            .should('have.value', randomLastName)

            cy.get('input[id="email"]')
            .type(randomEmail)
            .should('have.value', randomEmail)

            cy.get('input[id="password"]')
            .type(randomPassword)
            .should('have.value', randomPassword)

            cy.get('input[id="password_confirmation"]')
            .type(randomPassword)
            .should('have.value', randomPassword)

            //cy.get('.custom-control-label[for="'+randomGender+'"]').click()

            cy.get('button:first').click()

        })

        cy.contains('The gender field is required.').should('be.visible')
    })

    it('Fail at register, too short name, surname', function () {
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password(8);

        //const genders = ['Male', 'Female', 'Other']

        //const randomGender = faker.random.arrayElement(genders);
        
        //cy.visit('http://127.0.0.1:8000/signup')
        //cy.get('.navbar-nav').contains('Home').click()

        cy.intercept('/api/auth/register').as('responseRegister');

        cy.get('form').within(() => {
            cy.get('input[id="firstname"]')
            .clear()
            .type('a')
            .should('have.value', 'a')

            cy.get('input[id="lastname"]')
            .clear()
            .type('a')
            .should('have.value', 'a')

            cy.get('input[id="email"]')
            .clear()
            .type(randomEmail)
            .should('have.value', randomEmail)

            cy.get('input[id="password"]')
            .clear()
            .type(randomPassword)
            .should('have.value', randomPassword)

            cy.get('input[id="password_confirmation"]')
            .clear()
            .type(randomPassword)
            .should('have.value', randomPassword)

            //cy.get('.custom-control-label[for="'+randomGender+'"]').click()

            cy.get('button:first').click()

        })

        cy.contains('Please check the inputs again!').should('be.visible')
    })

    it('Fail at register, too short password', function () {
        const randomFirstName = faker.name.firstName()
        const randomLastName = faker.name.lastName()
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password(5);

        const genders = ['Male', 'Female', 'Other']

        const randomGender = faker.random.arrayElement(genders);
        
        //cy.visit('http://127.0.0.1:8000/signup')
        //cy.get('.navbar-nav').contains('Home').click()

        cy.intercept('/api/auth/register').as('responseRegister');

        cy.get('form').within(() => {
            cy.get('input[id="firstname"]')
            .clear()
            .type(randomFirstName)
            .should('have.value', randomFirstName)

            cy.get('input[id="lastname"]')
            .clear()
            .type(randomLastName)
            .should('have.value', randomLastName)

            cy.get('input[id="email"]')
            .clear()
            .type(randomEmail)
            .should('have.value', randomEmail)

            cy.get('input[id="password"]')
            .clear()
            .type(randomPassword)
            .should('have.value', randomPassword)

            cy.get('input[id="password_confirmation"]')
            .clear()
            .type(randomPassword)
            .should('have.value', randomPassword)

            cy.get('.custom-control-label[for="'+randomGender+'"]').click()

            cy.get('button:first').click()

        })

        cy.contains('Please check the inputs again!').should('be.visible')
    })

    it('Fail at register, wrong email format', function () {
        const randomFirstName = faker.name.firstName()
        const randomLastName = faker.name.lastName()
        const randomPassword = faker.internet.password(8);

        const genders = ['Male', 'Female', 'Other']

        const randomGender = faker.random.arrayElement(genders);
        
        //cy.visit('http://127.0.0.1:8000/signup')
        //cy.get('.navbar-nav').contains('Home').click()

        cy.intercept('/api/auth/register').as('responseRegister');

        cy.get('form').within(() => {
            cy.get('input[id="firstname"]')
            .clear()
            .type(randomFirstName)
            .should('have.value', randomFirstName)

            cy.get('input[id="lastname"]')
            .clear()
            .type(randomLastName)
            .should('have.value', randomLastName)

            cy.get('input[id="email"]')
            .clear()
            .type('email.com')
            .should('have.value', 'email.com')

            cy.get('input[id="password"]')
            .clear()
            .type(randomPassword)
            .should('have.value', randomPassword)

            cy.get('input[id="password_confirmation"]')
            .clear()
            .type(randomPassword)
            .should('have.value', randomPassword)

            cy.get('.custom-control-label[for="'+randomGender+'"]').click()

            cy.get('button:first').click()

        })

        cy.contains('Please check the inputs again!').should('be.visible')
    })

    it('Register successfull', function () {
        const randomFirstName = faker.name.firstName()
        const randomLastName = faker.name.lastName()
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password(8);

        const genders = ['Male', 'Female', 'Other']

        const randomGender = faker.random.arrayElement(genders);
        
        //cy.visit('http://127.0.0.1:8000/signup')
        //cy.get('.navbar-nav').contains('Home').click()

        cy.intercept('/api/auth/register').as('responseRegister');

        cy.get('form').within(() => {
            cy.get('input[id="firstname"]')
            .clear()
            .type(randomFirstName)
            .should('have.value', randomFirstName)

            cy.get('input[id="lastname"]')
            .clear()
            .type(randomLastName)
            .should('have.value', randomLastName)

            cy.get('input[id="email"]')
            .clear()
            .type(randomEmail)
            .should('have.value', randomEmail)

            cy.get('input[id="password"]')
            .clear()
            .type(randomPassword)
            .should('have.value', randomPassword)

            cy.get('input[id="password_confirmation"]')
            .clear()
            .type(randomPassword)
            .should('have.value', randomPassword)

            cy.get('.custom-control-label[for="'+randomGender+'"]').click()

            cy.get('button:first').click()

        })

        cy.wait('@responseRegister').then((interception) => {
            console.log(interception);
                var response = interception.response.body;
                if(response != null && response.message == "User successfully registered. Please check your email to complete your registration."){
                    var userId = response.user.id;
                    cy.request('POST', 'http://127.0.0.1:8000/api/test/generate/emailToken', {user_id: userId})
                    .its('body')
                    .as('currentToken').then(() => {
                        const token = this.currentToken
                        if(token != null && token != "error"){
                            cy.visit('http://127.0.0.1:8000/email/verify/'+token).then(() => {
                                cy.get('.btn-success').should('be.visible').click()
                            })
                        } else
                            throw new Error("Test fails on getting email token")
                    })
                } else
                    throw new Error("Test fails on register")
          });
    
        cy.url()
            .should('include', '/signin').then(() => {
                 cy.get('form').within(() => {
                     cy.get('input[id="email"]')
                     .type(randomEmail)
                     .should('have.value', randomEmail)
            
                     cy.get('input[id="password"]')
                     .type(randomPassword)
                     .should('have.value', randomPassword)
            
                      cy.get('button:first').click()
                 })

                 cy.url()
                .should('include', '/home')
             })
    })
})