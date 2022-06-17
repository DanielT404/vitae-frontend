describe('Desktop.route.cy.ts', () => {
    before(() => {
        cy.visit("/desktop")
        cy.intercept('GET', '/api/files').as('getFiles');
        cy.wait('@getFiles');
    })

    it('should display files', () => {
        cy.get('.fileWrapper').should('have.length.above', 0);
    })

    it('should open a file window on dblclick and add the file to the bar', () => {
        cy.get('.innerWindow').should('not.exist');
        cy.get('.fileIcon').first().dblclick();
        cy.get('.innerWindow').should('exist');
    })
    
    it('should add a new minimized file in the bar after dblclick', () => {
        cy.get('.wrappedFile').should('have.length', 1);
        cy.get('.fileIcon').first().dblclick();
        cy.get('.wrappedFile').should('have.length', 2);
    })

    it('minimized file should have an active style in the bottom bar by default after file dblclick', () => {
        cy.get('.fileIcon').first().dblclick();
        cy.get('.wrappedFile > a.icon').should('have.class', 'isActive');
    })
})