/// <reference types="Cypress" />
class LoginPage {
    loginIn(){
        return cy.get('.ml-auto > :nth-child(1) > .nav-link').click().get('#email').type('dsremacki@gmail.com').get('#password').type('Cackalica2').get('.btn').click()
    }
    

}
export default LoginPage;