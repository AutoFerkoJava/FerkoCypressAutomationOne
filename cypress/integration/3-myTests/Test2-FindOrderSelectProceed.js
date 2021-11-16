describe("My First Test Suite", function () {
    it("My FirstTest case", function () {
      //test steps
      cy.visit("https://rahulshettyacademy.com/seleniumPractise#/");
      // get is find elements in Cypress
      cy.get(".search-keyword").type('ca');
      cy.wait(2000);
  
      //cy.get('.product:visible').should('have.length', 4);
      
      //Parent child chaining get method with find and should
      cy.get('.products').as('productLocator')
      cy.get('@productLocator')
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text();
        if (textVeg.includes('Cashews')) 
        {
          $el.find('button').click()
        }
      })

      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()
      //cy.get('button').click()
    })
})


