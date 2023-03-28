require("cypress-xpath");

describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
    cy.get("#outlined-basic").type("admin@jbmgroup.com");
    cy.get("#outlined-password-input").type("password123");
    cy.get("#LoginBtn").click();
  });

  it("Verify if a user is able to click maintenance navbar", () => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
    cy.xpath("//div[normalize-space()='Maintenance']").click(); //maintenance
    cy.wait(1000);  
  });
  it("Verify if a user is able to click Quality navbar", () => {
    cy.xpath("//div[normalize-space()='Quality Block']").click(); //quality block
    cy.wait(1000);
});
it("Verify if a user is able to click Available navbar", () => {
    cy.xpath("//div[normalize-space()='Available']").click(); //Available
    cy.wait(1000);
});
it("Verify if a user is able to click Total Assets navbar", () => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/");
});
});
