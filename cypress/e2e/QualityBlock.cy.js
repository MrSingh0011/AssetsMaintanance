require("cypress-xpath");
describe("QualityBlock", () => {
  beforeEach(() => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
    cy.get("#outlined-basic").type("admin@jbmgroup.com");
    cy.get("#outlined-password-input").type("password123");
    cy.get("#LoginBtn").click();
    //cy.xpath("//div[normalize-space()='Maintenance']").click();
    ////div[normalize-space()='Quality Block']
  });
  it("Verify if a user is able click on QualityBlock Navbar", () => {
    cy.xpath("//div[normalize-space()='Quality Block']").click();
    cy.get('#455').type(12);
    cy.xpath("(//input[@id='455'])[2]").type(10);
    cy.xpath("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]").click();
    cy.get('#maintenanceBTN').click();
  });
});