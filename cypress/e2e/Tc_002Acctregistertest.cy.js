import Registerpage from "../Pageobjects/RegisterpagePOM"
import Homepage from "../Pageobjects/HomepagePOM"

describe('test suites', () =>{

   
       it.only('Acct registertest  with POM', ()=> {
           
           cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
           cy.wait(5000);

           const hm= new Homepage();
           hm.clickondropdown();
           cy.wait(5000);
           hm.clickonregister();
           cy.wait(5000);
   
           const reg= new Registerpage();
           reg.setFirstName("Don");
           reg.setLastName("Jagadesh");
           reg.setEmail("DonJagadesh7801@gmail.com");
           reg.setTelephone("9898987878");
           reg.setPassword("Don@789");
           reg.setConfirmPassword("Don@789");
           reg.checkPrivacypolicy();
           reg.clickonbtncontinue();
           cy.wait(7000);
           reg.verifyacctcreation();
    
       })
   
   
   })