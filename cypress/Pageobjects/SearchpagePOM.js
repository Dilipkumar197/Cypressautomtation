class Searchpage
{

   Searchbar()

    {
    
        cy.get("input[placeholder='Search']").type('imac');

    }

    Searchbaricon()

    {
    
        cy.get("button[class='btn btn-default btn-lg']").click();

    }



}


export default  Searchpage