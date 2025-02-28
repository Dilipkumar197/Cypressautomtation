class Forgotpassword

{

  setEmail(email)
  {
    cy.get("#input-email").type(email);
  }

  clickonbtn()
  {
    cy.get("input[value='Continue']").click();
  }

  verifyemailtext()
  {

    cy.xpath("//div[@class='alert alert-success alert-dismissible']").should('have.text',"An email with a confirmation link has been sent your email address.");

  }
    
  
}

export default  Forgotpassword