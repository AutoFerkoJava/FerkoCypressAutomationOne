//Framework topics and starting with test building Cypress Hook

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

})
})
