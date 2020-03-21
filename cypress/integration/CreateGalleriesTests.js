/// <reference types="Cypress" />
import LoginPage from '../support/LoginPage'
import HomePage from '../support/HomePage'
import CreateGalleryPage from '../support/CreateGalleryPage'
import MyGalleriesPage from '../support/MyGalleriesPage'

describe('Create Gallery Test', () => {
    //init objects
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const createGalleryPage = new CreateGalleryPage()
    const myGalleriesPage = new MyGalleriesPage()

    const title = 'cvet'
    //before every test do the login
    beforeEach('Login', ()=> {
        cy.visit("https://gallery-app.vivifyideas.com/")
        loginPage.loginIn()
        
    })

    
    it('Create gallery with picture', () => {
        homePage.getCreateGalleryButtonAndClick() 
        createGalleryPage.createGallery(title, 'crven cvet je lep cvet', 'https://www.jacksonandperkins.com/images/xxl/v1780.jpg')
        homePage.getMyGalleriesButtonAndClick() //open my galleries
        cy.wait(3000)
        myGalleriesPage.getSearchBoxAndType(title)
    
        myGalleriesPage.numOfSearchResults()
        
    })
    it('Create gallery without picture and get screenshot of error', () => {
        homePage.getCreateGalleryButtonAndClick() 
        createGalleryPage.createGalleryWithoutImage('cvet2', 'crven cvetic zamalo')
        cy.screenshot()
    })

    it('Delete gallery', ()=>{
        cy.wait(3000)
        myGalleriesPage.getSearchBoxAndType(title)
        homePage.getMyGalleriesButtonAndClick()
        cy.get(':nth-child(1) > h2 > .box-title').click()
        cy.get(':nth-child(5) > button.btn').click()
    })

 
})
