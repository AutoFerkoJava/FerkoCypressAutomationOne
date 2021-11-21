describe("My Eighth Test Suite", function () {

    it("My Eighth Test case", function () {
      //test steps --> Handling Child windows using Cypress
      //cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
      cy.visit(Cypress.env('url')+"/AutomationPractice/");
    //Get the attribute of this Url
    cy.get('#opentab').then(function(el)
    {
        const url=el.prop('href')
        cy.log(url)
        cy.visit(url)

        //access subdomains rahulshettyacademy.com
    })
    })
})
