import Login from "../Pageobjects/LoginpagePOM"
import Homepage from "../Pageobjects/HomepagePOM"

describe('test suites', () =>{

    //General approach
       it.skip('Log in test', ()=> {
           
           cy.visit("https://awesomeqa.com/ui/index.php?route=common/home");
           cy.wait(5000);
           cy.xpath("//span[@class='caret']").click();
           cy.xpath("(//a[text()='Login'])[1]").click();
   
           cy.get("#input-email").type("vdilipkumar197888@gmail.com");
           cy.get("#input-password").type("Deepu@123");
           cy.get("input[value='Login']").click();
           cy.xpath("//h2[normalize-space()='My Account']").should('have.text',"My Account");
       
       })
   
   
       // lOG IN TEST with POM Model
   
       it.only('Log in test  with POM', ()=> {
           
           cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
           cy.wait(5000);

           const hm= new Homepage();
           hm.clickondropdown();
           cy.wait(5000);
           hm.clickonlogin();
           cy.wait(5000);
   
           const ln= new Login();
           ln.setUsername("Harishkumar567@gmail.com");
           ln.setPassword("Harish@123");
           ln.clickSubmit();
           cy.wait(5000);
           ln.VerifyLogin();
   
    
       })
   

   
   })