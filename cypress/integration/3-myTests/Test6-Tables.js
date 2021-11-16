
describe("My Sifth Test Suite", function () {

    it("My Sifth Test case", function () {
      //test steps --> Child tab with combination of Cypress & Jquery commands
      cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
      
      //Handling Tables
      cy.get('tr td:nth-child(2)').each(($e1, index,$list)=>{
        //select the 2d column --> sybling
        const text=$e1.text()
        if(text.includes("Python"))
        {
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
            {
               const priceText= price.text ()
               expect(priceText).to.equal('25')
            })
        }

      })
    })
})
