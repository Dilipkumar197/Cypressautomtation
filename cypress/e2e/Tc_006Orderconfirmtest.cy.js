import Login from "../Pageobjects/LoginpagePOM"
import Homepage from "../Pageobjects/HomepagePOM"
import Searchpage2 from "../Pageobjects/SearchpagePOM2"
import checkoutpage from "../Pageobjects/CheckoutpagePOM"

describe('test suites', () =>{

   
       it('Orderconfirmtest', ()=> {
           
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
           cy.wait(5000);


           const sp = new Searchpage2();
        
           sp.Linkcartlist();
           sp.Lnkcheckoutpage();
           cy.wait(5000);
          
          const cp = new checkoutpage();
          cy.wait(10000);
          cp.radiobtn();
          cp.txtfirstname('Sai Krishna');
          cp.txtlastname('Balivada');
          cp.txtcompany('SAS');
          cp.txtaddress('12-158');
          cp.txtcity('Luton');
          cp.txtpostcode('LUTONXP');
          cp.selectregion();
          cp.btncontinue();

          cy.wait(5000);
          cp.Deliveryaddressconfirm();
          cp.Shippingtxtfirstname('Sai');
          cp.Shippingtxtlastname('Kiran');
          cp.Shippingtxtcompany('Google');
          cp.Shippingtxtaddress('56-178');
          cp.Shippingtxtcity('Luton');
          cp.shippingbtncontinue();
          cp.txtcommentdelivery('Leave the order at door');
          cp.btncontinuedelivery();
          cp.Checkbox();
          cp.btncontinuepayment();
          cp.btnconfirmorder();
          cp.verifyorderconfirmed();

                     
       })
   
   
   })