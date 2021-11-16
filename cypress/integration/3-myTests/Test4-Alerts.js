
describe("My Fourth Test Suite", function () {

    it("My FourthTest case", function () {
      //test steps --> Alerts popUp
      cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
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


    })
})
