class HomePage {
    //find locator for gallery and click
    getCreateGalleryButtonAndClick() {
        return cy.get('.mr-auto > :nth-child(3) > .nav-link').click()
    }

    getMyGalleriesButtonAndClick(){
        return cy.get(':nth-child(2) > .nav-link').click()
    }
    
}

export default HomePage;