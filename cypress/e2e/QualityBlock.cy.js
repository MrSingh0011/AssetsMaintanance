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
    cy.xpath("(//input[@name='goodPart'])").eq(1).type('1');
    cy.xpath("(//input[@name='notGoodPart'])").eq(1).type(1);
    cy.xpath("//button[@id='dropdown-basic']//*[name()='svg']").eq(1).click();
    cy.get('#maintenanceBTN').click();
  });
  it("Verify if a user is able to move Quality Block Die move to Available Die", () => {
    cy.xpath("//div[normalize-space()='Quality Block']").click();
    cy.xpath("(//input[@name='goodPart'])").eq(0).type('0');
    cy.xpath("(//input[@name='notGoodPart'])").eq(0).type(0);
    cy.xpath("//button[@id='dropdown-basic']//*[name()='svg']").eq(0).click();
    cy.get('#availableBTN').click();
  });
});
