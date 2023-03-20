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
    // cy.xpath("//tbody/tr[1]/td[9]/div[1]/button[1]//*[name()='svg']").click();
    cy.get(".edit-btn").click();
    cy.wait(4500);
    // cy.get('.css-19bb58m').click();
   // cy.get('#react-select-2-option-1').click();
    // Select the dropdown element by its ID
   // cy.get('#my-dropdown').select('#react-select-11-option-1');
    //cy.get(':nth-child(12) > :nth-child(1) > .modal > .modal-dialog > .modal-content > .modal-body > #popupForm > :nth-child(1) > .select > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').click("#react-select-31-input");
    //cy.get("#react-select-31-input").click();
    // cy.xpath("//div[@class=' css-15lsz6c-indicatorContainer']//*[name()='svg']").click();
  });
  it("Check that the Available die is move to maintenance or not", () => {
    cy.xpath("//div[normalize-space()='Available']").click();
    cy.xpath("//p[normalize-space()='2']").click();
    cy.wait(4500);
    cy.get(".show.dropdown").click();
   // cy.get("#dropdown-basic").should("be.visible").click({ force: false });
    //cy.get(':nth-child(10) > [style="padding-right: 2%; width: 80px;"]').click();
    // cy.xpath("//tbody/tr[1]/td[9]/div[1]/button[1]//*[name()='svg']").click();
    //cy.get(".edit-btn").click();
   // cy.xpath("//p[normalize-space()='2']").click();
});
});
