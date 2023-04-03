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
//   it("Check that the Available die is move to maintenance or not", () => {
//     cy.xpath("//div[normalize-space()='Available']").click();
//     cy.xpath("//p[normalize-space()='2']").click();
//     cy.wait(4500);
//     cy.get("#dropdown-basic").should("be.visible").click({ force: false });
//     cy.get(".edit-btn").click();
// });
});
