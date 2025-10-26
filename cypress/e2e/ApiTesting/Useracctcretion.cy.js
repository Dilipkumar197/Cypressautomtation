describe('Post calls' , () =>{


it("Approch1 -passing Hard Code Json object" ,() =>{

    const requestBody={
        
        firstName: "Dilip",
        lastName:  "Kumar",
        age: 28,
        email: "vdkkumar567@gmail.com",
        password: "Test@123"
       }

        


                      cy.request(
                        {
 
                                   method: 'POST',
                                   url:'https://dummyjson.com/users/add',
                                   body:requestBody
                      })

                      .then((response)  =>{

                        expect(response.status).to.eq(201)
                        expect(response.body.firstName).to.eq("Dilip")
                        expect(response.body.lastName).to.eq("Kumar")
                        expect(response.body.age).to.eq(28)
                        expect(response.body.email).to.eq("vdkkumar567@gmail.com")

                      })


})



it("Approch2 -Dynamically passing Hard Code Json object" ,() =>{


    const requestBody={
        
                     firstName: Math.random().toString(5).substring(2),
                     lastName: Math.random().toString(5).substring(2),
                     age: 28,
                     email: Math.random().toString(5).substring(2)+"gmail.com",
                     password: Math.random().toString(5).substring(2)
                    }

                      cy.request(
                        {
 
                                   method: 'POST',
                                   url:'https://dummyjson.com/users/add',
                                   body:requestBody
                      })

                      .then((response)  =>{

                        expect(response.status).to.eq(201)
                        expect(response.body.firstName).to.eq(requestBody.firstName)
                        expect(response.body.lastName).to.eq(requestBody.lastName)
                        expect(response.body.age).to.eq(requestBody.age)
                        expect(response.body.email).to.eq(requestBody.email)

                      })


})


it.only("Approch3- passing Hard Code Json object using fixture file" ,() =>{

    cy.fixture('userdata').then( (data)=>{

        const requestBody=data;


                      cy.request(
                        {
 
                                   method: 'POST',
                                   url:'https://dummyjson.com/users/add',
                                   body:requestBody

                      })

                      .then((response)  =>{

                        expect(response.status).to.eq(201)
                        expect(response.body.firstName).to.eq(requestBody.firstName)
                        expect(response.body.lastName).to.eq(requestBody.lastName)
                        expect(response.body.age).to.eq(requestBody.age)
                        expect(response.body.email).to.eq(requestBody.email)

                      })

                    })



                })        


})




