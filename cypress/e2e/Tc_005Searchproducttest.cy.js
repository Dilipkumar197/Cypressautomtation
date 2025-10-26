import Login from "../Pageobjects/LoginpagePOM"
import Homepage from "../Pageobjects/HomepagePOM"
import Searchpage2 from "../Pageobjects/SearchpagePOM2"



describe('test suites', () =>{

   
       it('Search product test', ()=> {
           
           cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
           cy.wait(5000);

           const hm= new Homepage();
           hm.clickondropdown();
           hm.clickonlogin();
           cy.wait(5000);
   
           const ln= new Login();
           ln.setUsername("Harishkumar567@gmail.com");
           ln.setPassword("Harish@123");
           ln.clickSubmit();
          
           const sp = new Searchpage2();
        
           sp.Searchbar();
           sp.Searchbaricon();
           cy.wait(5000);
           sp.clickonproductlink();
           sp.verifyproducttext();
           sp.clickonaddtocart();
           cy.wait(5000);
           sp.productlistsuccessmessage();
           //sp.Linkcartlist();
           //sp.Viewcartlink();
           //sp.Linkcontinueshopping();
    
           
           
       })
   

   
   })