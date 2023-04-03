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
    cy.get('#dropdown-basic').should('be.visible').click({force:true});
    cy.wait(3000);
  });
   it("Make Sure the Add Details Button is enabled ", () => {
       cy.get('#dropdown-basic').should('be.visible').click({force:true});
       cy.get(':nth-child(1) > .edit-btn').click()
   });
  it("Make Sure fill all the details Expected Repair date & time condition ", () => {
    cy.get('#dropdown-basic').should('be.visible').click({force:true});
    cy.get(':nth-child(1) > .edit-btn').click()
    cy.get("#observation").type("Test LLC", { force: true });
    cy.get("#workReq").type("Part issue", { force: true });
    // cy.get(
    //   ":nth-child(7) > :nth-child(1) > .modal > .modal-dialog > .modal-content > .modal-body > #popupForm > :nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > #expectedRepair"
    // )
     cy.xpath("(//input[@id='expectedRepair'])[5]").invoke("attr", "type", "text") // date picker
      .type("2023-04-04 15:43",{ force: true });
    // cy.xpath(
    //   "(//button[@type='submit'][normalize-space()='Submit'])[5]"
    // ).click();
    cy.get(".submit btn btn-secondary").click();
  });
  it("After Submitted Expected Repair date and time then user fill the Actual Repair date and time ", () => {
    cy.get('#dropdown-basic').should('be.visible').click({force:true});
    cy.get(':nth-child(1) > .edit-btn').click()
    cy.wait(3000);
    cy.get(
      ":nth-child(7) > :nth-child(1) > .modal > .modal-dialog > .modal-content > .modal-body > #popupForm > :nth-child(5) > :nth-child(2) > .MuiInputBase-root > #actualRepair"
    )
      .invoke("attr", "type", "text")
      .type("2023-04-05");
    cy.xpath(
      "(//button[@type='submit'][normalize-space()='Submit'])[5]"
    ).click();
  });
  it("Make sure the Quality Button is enabled then user should able to move Maintenace die to quality block. ", () => {
    cy.get('[data-testid="MoreVertRoundedIcon"]').click();
    cy.on("window:confirm", (t) => {
      //verify text on pop-up
      expect(t).to.equal("Move this Die to Quality?");
      return true;
    });
    cy.contains("Move to Quality").click();
  });
});
