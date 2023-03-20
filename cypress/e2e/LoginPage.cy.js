
describe("LoginPage", () => {
    beforeEach(() => {
      cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
      cy.wait(7000);
    });
  
    it("Verify if a user is able to login with valid email address and valid password.", () => {
      cy.get("#outlined-basic").type("admin@jbmgroup.com");
      cy.get("#outlined-password-input").type("password123");
      cy.get("#LoginBtn").click();
      cy.wait(1000);
    });
  
    it("Verify if a user cannot login with an invalid email address and valid password.", () => {
      cy.get("#outlined-basic").type("admin@jbmgroup1234.com");
      cy.get("#outlined-password-input").type("password123");
      cy.get("#LoginBtn").click();
      cy.wait(1000);
    });
  
    it("Verify if a user is able to login with valid email address and invalid password.", () => {
      cy.get("#outlined-basic").type("admin@jbmgroup.com");
      cy.get("#outlined-password-input").type("password123456789");
      cy.get("#LoginBtn").click();
    });
  
    it("Verify the login page when both the email address and password field is blank and Login/Submit button is clicked.", () => {
      cy.get("#outlined-basic").type(" ");
      cy.get("#outlined-password-input").type(" ");
      cy.get("#LoginBtn").click();
    });
  });
  