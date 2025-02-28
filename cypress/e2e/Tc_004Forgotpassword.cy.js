import Login from "../Pageobjects/LoginpagePOM"
import Homepage from "../Pageobjects/HomepagePOM"
import Forgotpassword from "../Pageobjects/ForgotpasswordPOM"

describe('test suites', () =>{
   
       it('Forgot password test', ()=> {
           
           cy.visit("https://awesomeqa.com/ui/index.php?route=common/home");
           cy.wait(5000);

           const hm= new Homepage();
           hm.clickondropdown();
           hm.clickonlogin();
           cy.wait(5000);
   
           const ln= new Login();
           ln.clickonforgotpasslink();
           cy.wait(5000);
           
           const fp= new Forgotpassword();
           fp.setEmail("vdilipkumar197888@gmail.com");
           fp.clickonbtn();
           fp.verifyemailtext();

       })
   
   
   })