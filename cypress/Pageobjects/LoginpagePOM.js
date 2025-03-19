class Login

{

    clickondropdown()
    {
        cy.xpath("//span[@class='caret']").click();

    }

    clickonlogin()

    {
        cy.xpath("(//a[text()='Login'])[1]").click();
    }

    setUsername(username)
    {
        cy.get("#input-email").type(username);
    }   
      

    setPassword(password)
    {
        cy.get("#input-password").type(password);
    }

    clickSubmit()
    {
        cy.get("input[value='Login']").click();
    }

    VerifyLogin()
    {
        cy.get("h2:nth-child(1)").should('have.text',"My Account");
    }

    clickonforgotpasslink()
    {
        cy.xpath("(//a[normalize-space()='Forgotten Password'])[1]").click();
    }

}

export default  Login