import Login from "../Pageobjects/LoginpagePOM"
import Homepage from "../Pageobjects/HomepagePOM"
import Forgotpassword from "../Pageobjects/ForgotpasswordPOM"

describe('test suites', () =>{
   
       it('Forgot password test', ()=> {
           
           cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
           cy.wait(5000);

           const hm= new Homepage();
           hm.clickondropdown();
           cy.wait(5000);
           hm.clickonlogin();
           cy.wait(5000);
   
           const ln= new Login();
           ln.clickonforgotpasslink();
           cy.wait(5000);
           
           const fp= new Forgotpassword();
           fp.setEmail("Harishkumar567@gmail.com");
           fp.clickonbtn();
           //fp.verifyemailtext();

       })
   
   
   })