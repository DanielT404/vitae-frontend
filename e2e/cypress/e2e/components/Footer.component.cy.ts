describe('Footer.component.cy.ts', () => {
    it('should have cast icon active by default', () => {
        cy.visit('/');
        cy.get('#cast').should('have.class', 'isActive');
        cy.get('#cast').should('contain.text', 'cast');
    })

    it('when explore icon is clicked, it should have the active class', () => {
        cy.visit('/');
        cy.get('#explore').click();
        cy.get('#explore').should('have.class', 'isActive');
    })

    it('should load youtube video on explore icon click', () => {
        cy.visit('/');
        cy.get("#explore").click();
        cy.get('.videoResponsive > iframe').should('exist');
    })
    
    it('should trigger existance of file window on file click or touch', () => {
        cy.visit('/desktop');
        cy.intercept('GET','/api/files').as('getFiles').then((interceptor) => {
            console.log(interceptor);
        });
        cy.wait('@getFiles');
        cy.get('.fileIcon').first().dblclick();
        cy.get('.innerWindow').should('exist');
        cy.get('#minimizeIcon').click();
        cy.get('.innerWindow').should('not.exist');
        cy.get('.footer .wrappedFile > a.icon').click();
        cy.get('.innerWindow').should('exist');
    })

    it('new file opened should be active', () => {
        cy.get('.wrappedFile > a.icon').should('have.class', 'isActive');
    })


    context('larger screen resolutions', () => {
        beforeEach(() => {
            cy.viewport(1366, 768);
            cy.intercept('GET','/api/files').as('getFiles');
        })

        it('should open file window on minimized overview hover and file name clicked', () => {
            cy.visit('/desktop');
            cy.wait('@getFiles');

            cy.get('.fileIcon').first().dblclick();
            cy.get('.innerWindow').should('exist');
            cy.get('#minimizeIcon').click();
            cy.get('.innerWindow').should('not.exist');

            cy.get('.footer .wrappedFile').trigger('mouseenter');
            cy.get('.minimizedNav > h6').click();
            cy.get('.footer .wrappedFile').trigger('mouseleave');
            cy.get('.innerWindow').should('exist');
        })

        it('should remove the file from DOM on minimized overview hover and exit icon clicked', () => {
            cy.visit('/desktop');
            cy.wait('@getFiles');

            cy.get('.fileIcon').first().dblclick();
            cy.get('.innerWindow').should('exist');
            cy.get('#minimizeIcon').click();
            cy.get('.innerWindow').should('not.exist');

            cy.get('.footer .wrappedFile').trigger('mouseenter');
            cy.get('.minimizedNav > span.exitIcon').click();
            cy.get('.minimizedFileWrapper .wrappedFile').should('have.length', 0);
        })
    })
})