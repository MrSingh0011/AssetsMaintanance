require("cypress-xpath");
describe("Total Assets", () => {
  beforeEach(() => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
    cy.get("#outlined-basic").type("admin@jbmgroup.com");
    cy.get("#outlined-password-input").type("password123");
    cy.get("#LoginBtn").click();
  });

  it("Verify if a user is able to click on action button", () => {
    cy.get("#dropdown-basic").should("be.visible").click({ force: true });
    cy.get(".edit-btn").click();
  });
  it("Verify if a user is able to click on Edit Die button & Update the all requirements fields", () => {
    cy.get("#dropdown-basic").should("be.visible").click({ force: true });
    cy.get(".edit-btn").click();
    cy.get("#maintenanceForEvery").type("1");
    cy.get("#maintenanceAtEveryDays").type("10");
    //cy.get('a > .MuiButtonBase-root').click();//back button
    cy.get('.right-btn > [type="button"]').click();
  });
  it("Verify if a user is able to Delete the die", () => {
    cy.get("#dropdown-basic").should("be.visible").click({ force: true });
    //cy.get('.delete-btn').click();
    cy.get(".active > p").click();
  });
  it("Verify if a user is able to click on asset history button", () => {
    cy.get("#dropdown-basic").should("be.visible").click({ force: true });
    cy.xpath("(//div[@class='assetHistory-btn'])[1] ").click();
    cy.get("#button").click();
  });
  it("Verify if a user is able to click asset history button & Download all the previous Asset history data", () => {
    cy.get("#dropdown-basic").should("be.visible").click({ force: true });
    cy.xpath("(//div[@class='assetHistory-btn'])[1] ").click();
    cy.get("#button").click();
  });
  it("Verify that the download button is enabled or not", () => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/");
    cy.on("uncaught:exception", (err, runnable) => {
      // expect(err.message).to('something about the error')
      // done()
      return false;
    });
    cy.get(".download").should("be.visible").click();
    cy.get(".download").click();
  });
});
