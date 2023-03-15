require("cypress-xpath");
describe("Available", () => {
  beforeEach(() => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
    cy.get("#outlined-basic").type("admin@jbmgroup.com");
    cy.get("#outlined-password-input").type("password123");
    cy.get("#LoginBtn").click();
    //cy.xpath("//div[normalize-space()='Maintenance']").click();
  });
  it("Verify if a user is able click on Available Navbar", () => {
    cy.xpath("//div[normalize-space()='Available']").click(); 
  });
  it("Verify that the action button is enabled or not", () => {
    cy.xpath("//div[normalize-space()='Available']").click();
    cy.get('#dropdown-basic').should('be.visible').click({force:false}); 
    //cy.xpath("//tbody/tr[1]/td[9]/div[1]/button[1]//*[name()='svg']").click();
    cy.get('.edit-btn').click();
  });
  it("Check that the Maintenace Input form is enabled or not", () => {
    cy.xpath("//div[normalize-space()='Available']").click(); 
    cy.get('#dropdown-basic').should('be.visible').click({force:false});
   // cy.xpath("//tbody/tr[1]/td[9]/div[1]/button[1]//*[name()='svg']").click();
    cy.get('.edit-btn').click();
   // cy.get('.css-19bb58m').click();
   cy.get('#react-select-11-option-0').click();
   // cy.xpath("//div[@class=' css-15lsz6c-indicatorContainer']//*[name()='svg']").click();
  });
});