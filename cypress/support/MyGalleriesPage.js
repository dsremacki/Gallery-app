class MyGalleriesPage {
    
    getSearchBoxAndType(input){
        return cy.get('.form-control').type(input).get('.input-group-append > .btn').click()
        
    }
    numOfSearchResults() {
        var x = []
         cy.get('.grid').children().then((e)=>{
             x = e.push(e)
             cy.log("Number of galleries:"+ x)
         })
        

    }
}

export default MyGalleriesPage
