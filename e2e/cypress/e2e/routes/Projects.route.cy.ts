describe('Projects.route.cy.ts', () => {
    beforeEach(() => {
        cy.visit("/projects")
    })

    it('should display projects', () => {
        cy.get('.projectsWrapper > .grid .card ').should('have.length.above', 0);
    })

    it('should open a projects\' github repository page on github element click ', () => {
        cy.intercept('GET', '/api/projects').as('getProjects');
        cy.wait('@getProjects');
        cy.window().then((win) => {
            cy.stub(win, 'open').as('newTabOpened');
        })
        cy.get('.card .cardExternalLink').each(($el) => {
            cy.wrap($el).click();
            cy.get('@newTabOpened').should('be.calledWithMatch', /https:\/\/github.com\/DanielT404\//);
        })
    })
})

