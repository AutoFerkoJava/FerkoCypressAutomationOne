//Handling Frames with Cypress using real time example
import 'cypress-iframe'

describe('My Nineth Test Suite', function(){
    it('My Nineth Test case', function(){

    //cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    cy.visit(Cypress.env('url')+"/AutomationPractice/");
    cy.frameLoaded("#courses-iframe")

    //switch to iframe mode using find locator
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    //Find two elements Bronz and Platinum --it validates the length of matches is 2
    cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    })
})
