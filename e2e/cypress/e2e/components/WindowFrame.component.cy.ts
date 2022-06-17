describe('WindowFrame.component.cy.ts', () => {
    beforeEach(() => {
        cy.visit('/desktop');
    })

    it('shouldn\'t be present in the DOM by default', () => {
        cy.get('.innerWindow').should('not.exist');
    })

    it('should be present in the DOM on file click from Desktop page', () => {
        cy.get('.fileIcon').first().dblclick();
        cy.get('.innerWindow').should('exist');
    })

    it('should open the file in a new tab on clicking the fullscreen icon', () => {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('newTabOpened');
        })
        cy.get('.fileIcon').first().dblclick();
        cy.get('#fullscreenIcon').click();
        cy.get('@newTabOpened').should('be.calledWithMatch', /images.idratherprogram.com/);
    })

    it('should close the window on clicking the exit icon', () => {
        cy.get('.fileIcon').first().dblclick();
        cy.get('#exitIcon').click();
        cy.get('.innerWindow').should('not.exist');
    })

    it('should minimize the window on clicking the minimize icon', () => {
        cy.get('.fileIcon').first().dblclick();
        cy.get('#minimizeIcon').click();
        cy.get('.innerWindow').should('not.exist');
    })

    it('should not be active in the bottom bar once file has been minimized', () => {
        cy.get('.fileIcon').first().dblclick();
        cy.get('#minimizeIcon').click();
        cy.get('.innerWindow').should('not.exist');
        cy.get('.wrappedFile > a.icon').should('not.have.class', 'isActive');
    })
})