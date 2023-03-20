require("cypress-xpath");
describe("Add NewDie", () => {
  beforeEach(() => {
    cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
    cy.get("#outlined-basic").type("admin@jbmgroup.com");
    cy.get("#outlined-password-input").type("password123");
    cy.get("#LoginBtn").click();
  });
  it("Verify if a user is able to Click on AddNew Die Form", () => {
    cy.get("#button").click();
  });
  it("The user is able to fill all required details then submit the AddNew Die Form", () => {
    cy.get("#button").click();
    cy.get("#name").type("PB-101");
    cy.get("#rfid").type("55");
    cy.get("#code").type("5");
    cy.get("#lifetimevalue").type("455000");
    cy.get("#lastMaintained")
      .invoke("attr", "type", "text") // date picker
      .type("2023-06-15");
    cy.get(".css-19bb58m").click();
    cy.get("#react-select-2-option-0").click();
    cy.get("#strokesSinceLastPM").type("4000");
    cy.get("#maintenanceForEvery").type("450");
    cy.get("#maintenanceAtEveryDays").type("60");
    // cy.get('a > .MuiButtonBase-root').click();
    cy.get('[type="submit"]').click();
    //     cy.get('button').click()          // Click on button
    //    cy.focused().click()              // Click on el with focus
    //    cy.contains('Welcome').click()    // Click on first el containing 'Welcome'
  });
  it("User is able click on Back Button From AddNew Die Form", () => {
    cy.get("#button").click();
    cy.get("a > .MuiButtonBase-root").click();
  });
});
