
describe("LoginPage", () => {
    beforeEach(() => {
      cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
      cy.wait(3000);
    });
  
    it("Verify if a user is able to login with valid email address and valid password.", () => {
      cy.get("#outlined-basic").type("admin@jbmgroup.com");
      cy.get("#outlined-password-input").type("password123");
      cy.get("#LoginBtn").click();
      cy.wait(3000);
    });
  
    it("Verify if a user cannot login with an invalid email address and valid password.", () => {
      cy.get("#outlined-basic").type("admin@jbmgroup1234.com");
      cy.get("#outlined-password-input").type("password123");
      cy.get("#LoginBtn").click();
      cy.wait(3000);
    });
  
    it("Verify if a user is able to login with valid email address and invalid password.", () => {
      cy.get("#outlined-basic").type("admin@jbmgroup.com");
      cy.get("#outlined-password-input").type("password123456789");
      cy.get("#LoginBtn").click();
      cy.wait(3000);
    });
  
    it("Verify the login page when both the email address and password field is blank and Login/Submit button is clicked.", () => {
      cy.get("#outlined-basic").type(" ");
      cy.get("#outlined-password-input").type(" ");
      cy.get("#LoginBtn").click();
      cy.wait(3000);
    });
    it("Verify if a user is able to Click on the logout button", () => {
      cy.get("#outlined-basic").type("admin@jbmgroup.com");
      cy.get("#outlined-password-input").type("password123");
      cy.get("#LoginBtn").click();
      cy.wait(3000);
      cy.get('.Navbar > .MuiButtonBase-root').click();
      cy.wait(2000);
    });
  });
  