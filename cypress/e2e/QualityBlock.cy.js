require("cypress-xpath");
describe("QualityBlock", () => {
  beforeEach(() => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
    cy.get("#outlined-basic").type("admin@jbmgroup.com");
    cy.get("#outlined-password-input").type("password123");
    cy.get("#LoginBtn").click();
  });
  it("Verify if a user is able to move Quality Block Die move to Maintenance Die", () => {
    cy.xpath("//div[normalize-space()='Quality Block']").click();
    cy.xpath("(//input[@name='goodPart'])[3]").type(0);
    cy.xpath("(//input[@name='notGoodPart'])[3]").type(0);
    cy.xpath("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]").click();
    cy.get('#maintenanceBTN').click();
  });
  it("Verify if a user is able to move Quality Block Die move to Available Die", () => {
    cy.xpath("//div[normalize-space()='Quality Block']").click();
    cy.xpath("(//input[@name='goodPart'])[3]").type(0);
    cy.xpath("(//input[@name='notGoodPart'])[3]").type(0);
    cy.xpath("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]").click();
    cy.get('#availableBTN').click();
  });
});
