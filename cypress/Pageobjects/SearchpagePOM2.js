class Searchpage2
{
 
   Searchbar()

   {
   
       cy.get("input[placeholder='Search']").type('imac');

   }

   Searchbaricon()

   {
   
       cy.get("button[class='btn btn-default btn-lg']").click();

   }


   clickonproductlink()

   {

    cy.xpath("//div[@class='caption']//a[contains(text(),'iMac')]").click();

   }

   verifyproducttext()

   {

    cy.xpath("//h1[normalize-space()='iMac']").should('have.text' ,'iMac');

   }

   clickonaddtocart()

   {

    cy.get('#button-cart').click();

   }
 

   productlistsuccessmessage()
   
   {

      cy.xpath("//div[@class='alert alert-success alert-dismissible']").should('have.text', 'Success: You have added iMac to your shopping cart!×');


   }


  Linkcartlist()

  {

    cy.get("#cart-total").click();

  }

  Viewcartlink()

  {

    cy.xpath("//strong[normalize-space()='View Cart']").click();

  }

  Linkcontinueshopping()

  {

    cy.xpath("//a[normalize-space()='Continue Shopping']").click();

  }

  Lnkcheckoutpage()

  {

    cy.xpath("//strong[normalize-space()='Checkout']").click();

  }
  

}

export default  Searchpage2