describe('Theme.context.cy.ts', () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it('is dark theme by default', () => {
        cy.get('[data-cy-theme="dark"]').should('exist');
    })
    it('should be an icon to toggle the theme', () => {
        cy.get('.defaultSwitchIcon').should('exist');
    })
    it('should display the opposite theme icon', () => {
        cy.get('.defaultSwitchIcon').contains('light_mode')
    })
    it('should display the opposite theme as text below icon', () => {
        cy.get('.defaultSwitchIcon + h6').should('have.text', "toggle light mode");
    })
    it('should change the theme to light on clicking the icon', () => {
        cy.get('.defaultSwitchIcon').click();
        cy.get('.defaultSwitchIcon').contains('dark_mode');
        cy.get('.defaultSwitchIcon + h6').should('have.text', "toggle dark mode");
        cy.get('div#app').invoke('attr', 'class').should('equal', 'lightBgApp');
    })
})