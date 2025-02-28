class Homepage

{

    clickondropdown()
    {
        cy.xpath("//span[@class='caret']").click();

    }

    clickonregister()
    {
        cy.xpath("//a[normalize-space()='Register']").click();
    }

    clickonlogin()

    {
        cy.xpath("(//a[text()='Login'])[1]").click();
    }

    
}

export default  Homepage