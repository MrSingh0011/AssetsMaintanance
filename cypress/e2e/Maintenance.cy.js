require("cypress-xpath");
describe("Maintenance", () => {
  beforeEach(() => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
    cy.get("#outlined-basic").type("admin@jbmgroup.com");
    cy.get("#outlined-password-input").type("password123");
    cy.get("#LoginBtn").click();
    cy.xpath("//div[normalize-space()='Maintenance']").click();
  });

  it("Verify that the Action Button is enabled or not & Action list are as follows: AddDetails & Quality", () => {
    cy.get("#dropdown-basic").should("be.visible").click({ force: true });
  });
  it("Make Sure the Add Details Button is enabled then the user can fill all the required details and able to submit the form ", () => {
    cy.get("#dropdown-basic").should("be.visible").click({ force: true });
    cy.xpath("//tbody//a[1]//div[1]").click();
    cy.get("#observation").type("Expected output is not coming");
    cy.get("#workReq").type("Part issue");
    cy.get("#actualWork").type("Some Part is under maintainence");
    cy.get("#expectedRepair").click().select("01-03-2023");
    //input[@id='expectedRepair']
    //cy.get('#actualRepair')
    cy.xpath("//button[@type='submit']").click();
    cy.get("#popupForm > .btn");
  });
  it("Make sure the Quality Button is enabled then user should able to move Maintenace die to quality block. ", () => {
    cy.get("#dropdown-basic").should("be.visible").click({ force: true });
    cy.on("window:confirm", (t) => {
      //verify text on pop-up
      expect(t).to.equal("Move this Die to Quality?");
      return false;
    });
    cy.contains("Move to Quality").click();
  });
});
