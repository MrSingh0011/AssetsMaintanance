describe('GET API test', () => {
    it('should return a list of posts', () => {
      cy.request('GET', 'http://3.7.85.13/cmms/asset/read').then((response) => {
        expect(response.status).to.eq(23)
        expect(response.body).to.have.length(21)
        // Add more assertions as required
      })
    })
  })