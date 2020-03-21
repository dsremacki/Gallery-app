class CreateGalleryPage {

    createGallery(name,description, url){
        return cy.get('#title').type(name).get('#description').type(description).get('.input-group > .form-control').type(url).get('form > :nth-child(4)').click()
    }

    createGalleryWithoutImage(name,description){
        return cy.get('#title').type(name).get('#description').type(description).get('.input-group > .form-control').get('form > :nth-child(4)').click()

    }

    
}
export default CreateGalleryPage