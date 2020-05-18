describe('Hello', () => {
  it('should rewrite to `/hello` when `/` is visited', () => {
    cy.visit('/');

    cy.location('pathname').should('eq', '/hello');
  });
});
