//47.Building Customized Cypress commands for reusing the code
//48. Parameterizing the test Data from Json files using each command
describe("My Tenth Test Suite", function () {
  //Runs once before all tests in the block
  before(function () {
    //data has access to json file
    cy.fixture("example").then(function (data) {
      //takes data from json file
      this.data = data;
    });
  });

  it("My Tenth Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get('select').select(this.data.gender);
    //Validating Assertions
    cy.get(':nth-child(4) > .ng-untouched').should(
      "have.value",
      this.data.name
    );
    //Verify Property is 2 or not
    cy.get('input[name="name"]:nth-child(2)').should(
      "have.attr",
      "minlength",
      "2"
    );
    //is disabled or Not "Entrepreneur (disabled)"
    cy.get('#inlineRadio3').should('be.disabled');
    cy.pause()
    //Customized commands "Shop --Link"
    cy.get(':nth-child(2) > .nav-link').click();
    
   
    this.data.productName.forEach(function(element) {
     
         cy.selectProduct(element)
    });
    
    
  });
});
