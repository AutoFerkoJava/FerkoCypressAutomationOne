describe("My Fifth Test Suite", function () {

    it("My Fifth Test case", function () {
      //test steps --> Child tab with combination of Cypress & Jquery commands
      //cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
      //cy.visit("http://qaclickacademy.com/practice.php");
      cy.visit(Cypress.env('url')+"/AutomationPractice/");
      cy.get('#alertbtn').click()
      cy.get('[value="Confirm"]').click()
     
      //window: alert
      cy.on('window:alert',(str)=>
      {
        //Mocha 
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })

      cy.on('window:confirm',(str)=>
      {
        //Mocha 
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })
      //INVOCE Cypress --to handle child jquery
      //Remove attribute in jquery and open it in the same page

      cy.get('#opentab').invoke('removeAttr','target').click()

      //Cypress go
      //Cy include
      //Cy substring go to navigate
      cy.url().should('include','qaclickacademy')
      cy.go('back')
    })
})
