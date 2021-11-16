//Validating Attribute properties and their behaviour with Cypress Assertions 

describe('My Tenth Test Suite', function(){
    //Runs once before all tests in the block
    before(function(){
   
       //data has access to json file
       cy.fixture('example').then(function(data){
       
           //takes data from json file
       this.data=data
       })
   
    })
   
   it ('My Tenth Tes Case',function(){
    
       cy.visit('https://rahulshettyacademy.com/angularpractice/')
       cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
       cy.get('select').select(this.data.gender)
       //Validating Assertions
       cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
       //Verify Property is 2 or not
       cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
       //is disabled or Not "Entrepreneur (disabled)"
       cy.get('#inlineRadio3').should('be.disabled')
   })
   })
   