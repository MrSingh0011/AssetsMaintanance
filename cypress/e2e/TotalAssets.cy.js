require("cypress-xpath");
describe("Total Assets", () => {
    beforeEach(() => {
      cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
      cy.get("#outlined-basic").type("admin@jbmgroup.com");
      cy.get("#outlined-password-input").type("password123");
      cy.get("#LoginBtn").click();
    });
  
    it("Verify if a user is able to click on action button", () => {
       cy.get('#dropdown-basic').should('be.visible').click({force:true});
       cy.get('.edit-btn').click();
    });
    it("Verify if a user is able to click on Edit Die button & Update the data", () => {
        cy.get('#dropdown-basic').should('be.visible').click({force:true});
        cy.get('.edit-btn').click();
        cy.get('#maintenanceForEvery').type("1");
        cy.get('#maintenanceAtEveryDays').type("10");
        //cy.get('a > .MuiButtonBase-root').click();//back button
        cy.get('.right-btn > [type="button"]').click();
     });
     it("Verify if a user is able to Delete the die", () => {
        cy.get('#dropdown-basic').should('be.visible').click({force:true});
        //cy.get('.delete-btn').click();
        cy.get('.active > p').click();
        
     });
});