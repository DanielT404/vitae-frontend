describe('Entrypoint.cy.ts', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load the animation', () => {
    cy.get('[data-cy-loading="true"]', { timeout: 15000 }).should('exist');
  })
  it('should hide the animation after 2 seconds', () => {
      cy.clock().tick(2000)
      cy.get('[data-cy-loading="false"]', { timeout: 15000 }).should('exist');
  })
})