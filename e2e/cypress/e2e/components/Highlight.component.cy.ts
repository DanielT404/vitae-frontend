describe('Highlight.component.cy.ts', () => {
    before(() => {
        cy.visit('/about-me');
    })
    it('should insert mark tags into the DOM to highlight input keyword match in the page contents', () => {
        cy.get('.keywordInput').clear().type('en');
        cy.get('.bodyFrame mark').should('have.length.above', 0);
    });
    it('should not insert mark tags in the DOM if the input doesn\'t match the page contents', () => {
        cy.get('.keywordInput').clear().type('q');
        cy.get('.bodyFrame mark').should('have.length', 0);
    });
    it('is active on every page (except resume) if the input is not empty and it matches with other pages\' contents', () => {
        cy.get('.keywordInput').clear().type('e');
        cy.get('.bodyFrame mark').should('have.length.above', 0);

        cy.visit('/desktop');
        cy.get('.keywordInput').clear().type('e');
        cy.get('.bodyFrame mark').should('have.length.above', 0);

        cy.visit('/projects');
        cy.get('.keywordInput').clear().type('e');
        cy.get('.bodyFrame mark').should('have.length.above', 0);

        cy.visit('/contact');
        cy.get('.keywordInput').clear().type('e');
        cy.get('.bodyFrame mark').should('have.length.above', 0);
    });
    it('is not active on every page (except resume) if the input doesn\'t match any page contents', () => {
        cy.get('.keywordInput').clear().type('qiiiii');
        cy.get('.bodyFrame mark').should('have.length', 0);

        cy.visit('/desktop');
        cy.get('.keywordInput').clear().type('qiiiii');
        cy.get('.bodyFrame mark').should('have.length', 0);

        cy.visit('/projects');
        cy.get('.keywordInput').clear().type('qiiiii');
        cy.get('.bodyFrame mark').should('have.length', 0);
        
        cy.visit('/contact');
        cy.get('.keywordInput').clear().type('qiiiii');
        cy.get('.bodyFrame mark').should('have.length', 0);
    });
})