import Registerpage from "../Pageobjects/RegisterpagePOM"
import Homepage from "../Pageobjects/HomepagePOM"

describe('test suites', () =>{

   
       it.only('Acct registertest  with POM', ()=> {
           
           cy.visit("https://awesomeqa.com/ui/index.php?route=common/home");
           cy.wait(5000);

           const hm= new Homepage();
           hm.clickondropdown();
           hm.clickonregister();
           cy.wait(5000);
   
           const reg= new Registerpage();
           reg.setFirstName("Dilip");
           reg.setLastName("Kumar");
           reg.setEmail("Vdilipkumar19966@gmail.com");
           reg.setTelephone("7798987878");
           reg.setPassword("Deepu@123456");
           reg.setConfirmPassword("Deepu@123456");
           reg.checkPrivacypolicy();
           reg.clickonbtncontinue();
           cy.wait(5000);
           reg.verifyacctcreation();
    
       })
   
   
   })