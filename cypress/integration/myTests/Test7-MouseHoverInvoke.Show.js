describe("My Seventh Test Suite", function () {

    it("My Seventh Test case", function () {
      //test steps --> MouseHover
      //cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
      cy.visit(Cypress.env('url')+"/AutomationPractice/");
      //Handling MouseHover
      cy.get('div.mouse-hover-content').invoke('show')
      cy.contains('Top').click()
      cy.url().should('include','top')
        
    })
})
