describe("Api tests",()=>{
    it("Create gallery",()=>{
        cy.request({
            method: 'POST',
            url:"gallery-app.vivifyideas.com/login",
            auth: {
                username:"dsremacki@gmail.com",
                password:"Cackalica2"
            }
          }).then(()=>{
              cy.request({
                method: 'POST',
                url: 'gallery-api.vivifyideas.com/api/galleries',
                form: true,
                body: {
                    title: "Cvetovi",
                    description: "Cvet crvene boje",
                    images: ["https://www.poljosfera.rs/wp-content/uploads/2016/02/images_agrosfera_agroteme_anthurium.jpg"]
                }
              })
          })
    })

})