class checkoutpage

{

radiobtn()

{

//cy.xpath("//label[normalize-space()='I want to use a new address']//input[@name='shipping_address']").click();
cy.get(":nth-child(3) > label > input").click();

}

txtfirstname(firstname)

{

    cy.xpath("//input[@id='input-payment-firstname']").type(firstname);

}

txtlastname(lastname)

{

    cy.xpath("//input[@id='input-payment-lastname']").type(lastname);

}

txtcompany(company)

{

    cy.xpath("//input[@id='input-payment-company']").type(company);

}

txtaddress(address)

{

    cy.xpath("//input[@id='input-payment-address-1']").type(address);

}

txtcity(city)

{

    cy.xpath("//input[@id='input-payment-city']").type(city);

}


txtpostcode(postcode)

{

    cy.xpath("//input[@id='input-payment-postcode']").type(postcode);

}

selectregion()

{

    cy.get("#input-payment-zone").select('Buckinghamshire');

}

btncontinue()

{

    cy.xpath("//input[@id='button-payment-address']").click();
}
    

Deliveryaddressconfirm()

{

    cy.get("#collapse-shipping-address > .panel-body > .form-horizontal > :nth-child(3) > label > input").click();


}

Shippingtxtfirstname(firstname1)

{
    cy.xpath("//input[@id='input-shipping-firstname']").type(firstname1);
}

Shippingtxtlastname(lastname1)

{
    cy.xpath("//input[@id='input-shipping-lastname']").type(lastname1);
}

Shippingtxtcompany(company1)

{
    cy.xpath("//input[@id='input-shipping-company']").type(company1);
}

Shippingtxtaddress(adress1)

{
    cy.xpath("//input[@id='input-shipping-address-1']").type(adress1);
}


Shippingtxtcity(city1)

{
    cy.xpath("//input[@id='input-shipping-city']").type(city1);
}


shippingbtncontinue()

{
    cy.xpath("//input[@id='button-shipping-address']").click();

}

txtcommentdelivery(comment)

{
    cy.xpath("//textarea[@name='comment']").type(comment);
    
}

btncontinuedelivery()

{
    cy.xpath("//input[@id='button-shipping-method']").click();

}

Checkbox()

{
    cy.xpath("//input[@type='checkbox']").click();


}

btncontinuepayment()
{
    cy.xpath("//input[@id='button-payment-method']").click();

}

btnconfirmorder()
{
    cy.xpath("//input[@id='button-confirm']").click();

}

verifyorderconfirmed()

{
    cy.xpath("//h1[normalize-space()='Your order has been placed!']").should('have.text', "Your order has been placed!");
}



}

export default  checkoutpage