//<reference types="Cypress" />
describe("My First Test Suite", function () {
  it("My FirstTest case", function () {
    //test steps
    cy.visit(Cypress.env('url')+"/seleniumPractise#/");
    //cy.visit("https://rahulshettyacademy.com/seleniumPractise#/");
    // get is find elements in Cypress
    cy.get(".search-keyword").type('ca');
    cy.wait(2000);

    //Selenium get hit url in browser, cypress get acts like findElement of Selenium
    //cy.get("product").should("have.length", 5);
    cy.get('.product:visible').should('have.length', 4);
    
    //Parent child chaining get method with find and should
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find(".product").should('have.length', 4);
    /** Elemement can changes*/
    //cy.get(':nth-child(3) > .product-action > button').click()

    //Method eq to pass index and get me the 2d product WITH  "CONTAINS" and click
    cy.get('@productLocator').find(".product").eq(1).contains('ADD TO CART').click().then(function()
    {
        console.log('sf')
    })
    
    //CY METHOD EACH --> iterate through an Array And click on the Last element
    cy.get('@productLocator')
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text();
        if (textVeg.includes('Cashews')) 
        {
          $el.find('button').click()
        }
      })
      // Assert logotext
      cy.get('.brand').should('have.text', 'GREENKART')
    
    /** Customized logo GREENKART* --PRINTS IN LOGS*/
    cy.get('.brand').then(function(logoelement){
      cy.log(logoelement.text())
    })
    //const logo=cy.get('.brand')
     
  });

  //fixture
});
