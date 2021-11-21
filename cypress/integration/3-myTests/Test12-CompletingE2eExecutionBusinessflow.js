/// <reference types="Cypress" />

import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'
describe("My Tenth Test Suite", function () {
  //Runs once before all tests in the block
  
  before(function () {
    //data has access to json file
    cy.fixture('example').then(function (data) {
      //takes data from json file
      this.data = data;
    });
  });

  it('My Tenth Test Case', function () {
    //only timeout for specific test
    //Cypress.config('pageLoadTimeout', 8000)
    const homePage=new HomePage()
    const productPage=new ProductPage()

    cy.visit(Cypress.env('url')+"/angularpractice/");

    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    
    //Validating Assertions
    homePage.getTwoWayDataBinding().should('have.value',this.data.name);
    
    //Verify Property is 2 or not
    homePage.getEditBox().should('have.attr','minlength','2');

    //is disabled or Not "Entrepreneaur (disabled)"
    homePage.getEntrepreneaur().should('be.disabled');
    
    //cy.pause()
    //Customized commands "Shop --Link"
    // Explicit wait from here
    Cypress.config('pageLoadTimeout', 8000)
    homePage.getShopTab().click();
    
       this.data.productName.forEach(function(element) {
         cy.selectProduct(element)
    });
    
    //click CheckOutButton
    productPage.checkOutButton().click()
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul li a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('input[type="submit"]').click()
    
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).') 
    cy.get('.alert').then(function(element)
    {
      const actualText=element.text()
      expect(actualText.includes("Success")).to.be.true
      
    })
    
  })
})