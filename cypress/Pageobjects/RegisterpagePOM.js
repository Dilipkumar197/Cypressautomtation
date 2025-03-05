class Registerpage
{


 setFirstName(firstname)
  {
   cy.get("#input-firstname").type(firstname);
  }   
 

 setLastName(lastname)
 {
   
 cy.get("#input-lastname").type(lastname);

 }   


 setEmail(email)
 {
    cy.get("#input-email").type(email);
 }

 setTelephone(telephone)
 {
    cy.get("#input-telephone").type(telephone);
 }

 setPassword(password)
 {
    cy.get("#input-password").type(password);
 }

 setConfirmPassword(confirmpwd)
 {
    cy.get("#input-confirm").type(confirmpwd);
 }

 checkPrivacypolicy()
 
 {
    cy.xpath("//input[@name='agree']").click();
 }

 clickonbtncontinue()
 
 {
    cy.get("input[value='Continue']").click();
 }

 verifyacctcreation()
 {
 cy.xpath("//h1[normalize-space()='Your Account Has Been Created!']").should('have.text',"Your Account Has Been Created!");

  }

}

export default  Registerpage