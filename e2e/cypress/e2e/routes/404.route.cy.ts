describe('404.route.cy.ts', () => {
    before(() => {
        cy.visit('/invalid-route');
    })
    it('should display custom 404 page on invalid route', () => {
        cy.get('.message').contains("Oops, it seems you're lost. Let me get you back on track!");
    })
    it('should have some available routes for the end user to navigate', () => {
        cy.get('.routeList a').should('have.length', 5); // 5 is the number of available routes within the app.
    })
})