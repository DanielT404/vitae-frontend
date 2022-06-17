describe('TreeFrame.component.cy.ts', () => {
    context('mobile resolutions', () => {
        before(() => {
            cy.viewport('iphone-xr');
            cy.visit("/");
        })
    
        it('should display a hamburger-type element', () => {
            cy.get('.hamburger').should('exist');
        })
        it('should not display the navigation', () => {
            cy.get('.navWrapperDarkBg').should('not.exist');
        })
        it('would show the navigation when the hamburger element is clicked', () => {
            cy.get('.hamburger').click();
            cy.get('.navWrapperDarkBg').should('exist');
        })
        it('has the about me section active by default', () => {
            cy.get('.currentSubNavDark > .navText').contains("About me");
        })
        it('changes the current page to /about-me on clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/about-me"]:last-child').click();
            cy.url().should('include', '/about-me');
        })
        it('highlights the current nav as About me on clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/about-me"]:last-child').click();
            cy.get('.currentSubNavDark > .navText').contains("About me");
        })
        it('changes the current page to projects on clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/projects"]').click();
            cy.url().should('include', '/projects');
        })
        it('highlights the current nav as Projects on clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/projects"]').click();
            cy.get('.currentSubNavDark > .navText').contains("Projects");
        })
        it('changes the current page to resume on clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/resume"]').click();
            cy.url().should('include', '/resume');
        })
        it('highlights the current nav as Resume on clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/resume"]').click();
            cy.get('.currentSubNavDark > .navText').contains("Resume");
        })
        it('changes the current page to contact on clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/contact"]').click();
            cy.url().should('include', '/contact');
        })
        it('highlights the current nav as Contact on clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/contact"]').click();
            cy.get('.currentSubNavDark > .navText').contains("Contact");
        })
    })

    context('larger screen resolutions', () => {
        before(() => {
            cy.viewport(1366, 768);
            cy.visit("/");
        })

        it('has the about me section active by default', () => {
            cy.get('.currentSubNavDark > .navText').contains("About me");
        })

        it('changes the current page to /about-me on clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/about-me"]:last-child').click();
            cy.url().should('include', '/about-me');
        })
        it('highlights the current nav as About me after clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/about-me"]:last-child').click();
            cy.get('.currentSubNavDark > .navText').contains("About me");
        })
        it('changes the current page to projects on clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/projects"]').click();
            cy.url().should('include', '/projects');
        })
        it('highlights the current nav as Projects after clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/projects"]').click();
            cy.get('.currentSubNavDark > .navText').contains("Projects");
        })
        it('changes the current page to resume on clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/resume"]').click();
            cy.url().should('include', '/resume');
        })
        it('highlights the current nav as Resume after clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/resume"]').click();
            cy.get('.currentSubNavDark > .navText').contains("Resume");
        })
        it('changes the current page to contact on clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/contact"]').click();
            cy.url().should('include', '/contact');
        })
        it('highlights the current nav as Contact after clicking the corresponding nav item', () => {
            cy.get('a.navTo[href*="/contact"]').click();
            cy.get('.currentSubNavDark > .navText').contains("Contact");
        })
    })
})