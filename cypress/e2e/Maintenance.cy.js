require("cypress-xpath");
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("Maintenance", () => {
  beforeEach(() => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
    cy.get("#outlined-basic").type("admin@jbmgroup.com");
    cy.get("#outlined-password-input").type("password123");
    cy.get("#LoginBtn").click();
    cy.xpath("//div[normalize-space()='Maintenance']").click();
  });

  it("Verify that the Action Button is enabled or not & Action list are as follows: AddDetails & Quality", () => {
    cy.xpath(
      "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]"
    ).click();
  });
  it("Make Sure the Add Details Button is enabled then the user can fill all the required details and able to submit the form ", () => {
    cy.xpath(
      "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]"
    ).click();
    cy.xpath("//tbody//a[1]//div[1]").click();
    cy.get("#observation").type("Test LLC", { force: true });
    cy.get("#workReq").type("Part issue", { force: true });
    cy.get("#expectedRepair")
      .invoke("attr", "type", "text") // date picker
      .type("2023-03-21 12:59")
      .type("{enter}")
      .click({ force: true });
    cy.xpath(
      "(//button[@type='submit'][normalize-space()='Submit'])[3]"
    ).click();
    // cy.get("#popupForm > .btn");
  });
  it("Make sure the Quality Button is enabled then user should able to move Maintenace die to quality block. ", () => {
    // cy.get("#dropdown-basic").should("be.visible").click({ force: true });
    cy.xpath(
      "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]"
    ).click();
    cy.on("window:confirm", (t) => {
      //verify text on pop-up
      expect(t).to.equal("Move this Die to Quality?");
      return true;
    });
    cy.contains("Move to Quality").click();
  });
});
