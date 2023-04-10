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
    cy.get("#name").type("PB-110");
    cy.get("#rfid").type("65");
    cy.get("#code").type("7");
    cy.get("#lifetimevalue").type("500000");
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click();
    cy.get('[data-timestamp="1680460200000"]').click();
    //invoke("attr", "type", "text").type("2023-04-09");
      cy.get('.css-19bb58m').click();
      
      cy.xpath("(//div[@class=' css-19bb58m'])[1]").click();
   cy.get(".css-19bb58m").click();
    //cy.get("#react-select-2-option-0").click();
    cy.get('#react-select-2-option-0').click();
    cy.get("#strokesSinceLastPM").type("5000");
    cy.get("#maintenanceForEvery").type("550");
    cy.get("#maintenanceAtEveryDays").type("70");
    cy.get('#image').attachFile('example.json')
    cy.get('[type="submit"]').click(); 
    cy.on("window:confirm", (t) => {
      //verify text on pop-up
      expect(t).to.equal("Do you want to Submit the Form ?");

    });
    // cy.window().then((win) => {
    //   cy.stub(win, 'alert').as('alert');
    // });
    // cy.get('[type="submit"]').click(); 
    // cy.get('@alert').should('be.calledWith', 'Do you want to Submit the Form ?'); 
  });
  it("User is able click on Back Button From AddNew Die Form", () => {
    cy.get("#button").click();
    cy.get("a > .MuiButtonBase-root").click();
  });
});
