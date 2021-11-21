//47.Building Customized Cypress commands for reusing the code
//48. Parameterizing the test Data from Json files using each command

/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
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
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
      const amount=$el.text()
      var res= amount.split(" ")
      res= res[1].trim()
      sum= Number(sum)+Number(res)

    }).then(function()
    {
      cy.log(sum)
    })
    

    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul li a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('input[type="submit"]').click()
          
    })
    
  });

