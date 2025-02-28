class Logout

{


    clicklogout()
    {
        cy.xpath("(//a[normalize-space()='Logout'])[2]").click();
     
    }

    
    Verifylogout()
    {
        cy.xpath("//h1[normalize-space()='Account Logout']").should('have.text',"Account Logout");
     
    }


}

export default  Logout