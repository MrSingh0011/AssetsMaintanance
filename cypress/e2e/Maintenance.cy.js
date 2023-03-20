require("cypress-xpath");
Cypress.on('uncaught:exception', (err, runnable) => {
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
    cy.xpath("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]").click();
  });
  it("Make Sure the Add Details Button is enabled then the user can fill all the required details and able to submit the form ", () => {
    cy.xpath("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]").click();
    cy.xpath("//tbody//a[1]//div[1]").click();
      cy.get('#observation').type("Test LLC", {force: true});
    cy.get("#workReq").type("Part issue",{force: true});
   // cy.get("#expectedRepair").type("2023-06-1812:24",{force: true});
     cy.get("#expectedRepair")
       .invoke("attr", "type", "text") // date picker
       .type("2023-03-17 12:59");
    //cy.get("#actualWork").type("Some Part is under maintainence",{force: true});
    // cy.get("#expectedRepair").invoke("attr", "type", "text").type("2023-03-15");
    // //input[@id='expectedRepair']
    // //cy.get('#actualRepair')
    // // cy.get("#lastMaintained")
    // //   .invoke("attr", "type", "text") // date picker
    // //   .type("2023-06-15");
   // cy.xpath("//div[contains(@class,'css-13cymwt-control')])").click();
   //id="actualRepair"
//    cy.get("#actualRepair")
//       .invoke("attr", "type", "text") // date picker
//       .type("31-03-2023");
    cy.xpath("(//button[@type='submit'][normalize-space()='Submit'])[3]").click();
    // cy.get("#popupForm > .btn");
  });
//   it("Make sure the Quality Button is enabled then user should able to move Maintenace die to quality block. ", () => {
//     cy.get("#dropdown-basic").should("be.visible").click({ force: true });
//     cy.on("window:confirm", (t) => {
//       //verify text on pop-up
//       expect(t).to.equal("Move this Die to Quality?");
//       return false;
//     });
//     cy.contains("Move to Quality").click();
  });
