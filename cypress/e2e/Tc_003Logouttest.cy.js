import Login from "../Pageobjects/LoginpagePOM"
import Homepage from "../Pageobjects/HomepagePOM"
import Logout from "../Pageobjects/LogoutpagePOM"
describe('test suites', () =>{


   
       // lOG IN TEST with POM Model
   
       it.only('Log out test ', ()=> {
           
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
           

           const lo= new Logout();
           cy.wait(5000);
           lo.clicklogout();
           cy.wait(5000);
           lo.Verifylogout();
   
    
       })
   

   
   })