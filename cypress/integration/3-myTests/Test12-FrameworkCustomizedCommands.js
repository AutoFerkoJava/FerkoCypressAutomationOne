//47.Building Customized Cypress commands for reusing the code
//48. Parameterizing the test Data from Json files using each command

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
    const homePage=new HomePage()
    const productPage=new ProductPage()

    cy.visit('https://rahulshettyacademy.com/angularpractice/');

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
    homePage.getShopTab().click();
    
   
    this.data.productName.forEach(function(element) {
     
         cy.selectProduct(element)
    });
    //click CheckOutButton
    productPage.checkOutButton().click()
    
    
  });
});
