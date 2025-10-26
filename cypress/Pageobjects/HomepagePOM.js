class Homepage

{

    clickondropdown()
    {
        cy.xpath("//span[@class='caret']").click();

    }

    clickonregister()
    {
        cy.xpath("(//a[normalize-space()='Register'])[1]").click();
    }

    clickonlogin()

    {
        cy.xpath("(//a[normalize-space()='Login'])[1]").click();
    }

    
}

export default  Homepage