describe('Project Title', () => {
  it("verify title-positive", () => {
  cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
  cy.title().should("eq", "Asset Maintenance");
});
it("verify title-negative test", () => {
  cy.visit("http://mm.thirdeye-ai.com/cmmsfrontend/login");
  cy.title().should("eq", "Assets Maintenance");
})
})
