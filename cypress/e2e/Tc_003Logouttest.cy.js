import Login from "../Pageobjects/LoginpagePOM"
import Homepage from "../Pageobjects/HomepagePOM"
import Logout from "../Pageobjects/LogoutpagePOM"
describe('test suites', () =>{


   
       // lOG IN TEST with POM Model
   
       it.only('Log out test ', ()=> {
           
           cy.visit("https://awesomeqa.com/ui/index.php?route=common/home");
           cy.wait(5000);

           const hm= new Homepage();
           hm.clickondropdown();
           hm.clickonlogin();
           cy.wait(5000);
   
           const ln= new Login();
           ln.setUsername("vdilipkumar197888@gmail.com");
           ln.setPassword("Deepu@123");
           ln.clickSubmit();
           ln.VerifyLogin();
           

           const lo= new Logout();
           lo.clicklogout();
           lo.Verifylogout();
   
    
       })
   

   
   })