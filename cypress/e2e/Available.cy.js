require("cypress-xpath");
describe("Available", () => {
  beforeEach(() => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
    cy.get("#outlined-basic").type("admin@jbmgroup.com");
    cy.get("#outlined-password-input").type("password123");
    cy.get("#LoginBtn").click();
  });
  it("Verify if a user is able click on the Available Navbar", () => {
    cy.xpath("//div[normalize-space()='Available']").click();
  });
  it("Verify that the action button is enabled or not", () => {
    cy.xpath("//div[normalize-space()='Available']").click();
    cy.get("#dropdown-basic").should("be.visible").click({ force: false });
    cy.get(".edit-btn").click();
  });
  it("Check that the Maintenace Input form is enabled or not", () => {
    cy.xpath("//div[normalize-space()='Available']").click();
    cy.get("#dropdown-basic").should("be.visible").click({ force: false });
    cy.get(".edit-btn").click();
    cy.wait(4500);
  });
  it("Check that the Available die is move to maintenance or not", () => {
    cy.xpath("//div[normalize-space()='Available']").click();
    //cy.get('.MuiTablePagination-actions > [tabindex="0"]').click({force: true});
    cy.get('[aria-label="Go to next page"]').click({force: true});
    cy.get('[aria-label="Go to next page"]').click({force: true});
    cy.get('[aria-label="Go to next page"]').click({force: true});
    //cy.get('[aria-label="Go to previous page"]').click({force: true});
    // cy.xpath("//p[normalize-space()='2']").click();
    //cy.get(':nth-child(4) > [style="padding-right: 2%; width: 80px;"]').click();
    // cy.wait(4500);
     cy.get("#dropdown-basic").should("be.visible").click({ force: false });
     //cy.get(':nth-child(4) > [style="padding-right: 2%; width: 80px;"]').click();
     cy.get(".edit-btn").click();
     cy.get('#issueDescription').type('testing')
     //cy.get('[type="submit"]').click();
});
it("Verify that the download button is enabled or not", () => {
  cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/quality");
  cy.on("uncaught:exception", (err, runnable) => {
    // expect(err.message).to('something about the error')
    // done()
    return false;
  });
  cy.get(".download").should("be.visible").click();
  cy.get(".download").click();
});
});
