// @ts-ignore
import { handleNavigation } from '../../utils/handleNavigation';

describe('HeaderFrame.component.cy.ts', () => {    
    it('should go to the next available route on right arrow click', () => {
        cy.visit('/');
        cy.window().then((win) => {
            const currentPath : string = win.location.pathname;
            const nextPath : string | undefined = handleNavigation(currentPath, "back");
            cy.get('.frameHeader .navigation > #next_route_icon').click();
            if(nextPath) {
                cy.url().should('include', handleNavigation(currentPath, "next"));
            }
        });
    })
    it('should go to the previous available route on left arrow click', () => {
        cy.visit('/');
        cy.window().then((win) => {
            const currentPath : string = win.location.pathname;
            const nextPath : string | undefined = handleNavigation(currentPath, "back");
            cy.get('.frameHeader .navigation > #back_route_icon').click();
            if(nextPath) {
                cy.url().should('include', handleNavigation(currentPath, "back"));
            }
        });
    })
    it('should not change route if the left arrow is clicked on the first available route', () => {
        cy.visit('/desktop');
        cy.window().then((win) => {
            const currentPath : string = win.location.pathname;
            const nextPath : string | undefined = handleNavigation(currentPath, "back");
            cy.get('.frameHeader .navigation > #back_route_icon').click();
            if(!nextPath) {
                cy.url().should('include', currentPath);
            }
        });
    })
    it('should not change route if the right arrow is clicked on the last available route', () => {
        cy.visit('/contact');
        cy.window().then((win) => {
            const currentPath : string = win.location.pathname;
            const nextPath : string | undefined = handleNavigation(currentPath, "next");
            cy.get('.frameHeader .navigation > #next_route_icon').click();
            if(!nextPath) {
                cy.url().should('include', currentPath);
            }
        });
    })
    it('should refresh the current page on refresh icon click', () => {
        cy.visit('/projects');
        cy.window().then((win) => {
            const currentPath : string = win.location.pathname;
            cy.get('.frameHeader .navigation > #refresh_icon').click();
            cy.url().should('include', currentPath);
        })
    })
    it('should hide the HeaderFrame on upward arrow click', () => {
        cy.visit('/');

        cy.get('.frameHeader').should('exist');
        cy.get('.frameHeader .navigation > #expand_section_icon').click();

        cy.get('.frameHeader').should('not.exist');
        cy.get('.expandSection').should('exist');
    })
    it('should close the frame container on exit icon click', () => {
        cy.visit('/about-me');
        cy.get('.frameContainer').should('exist');
        cy.get('.exit').click();
        cy.get('.frameContainer').should('not.exist');
    })
    it('should open up the youtube video on exit icon click', () => {
        cy.visit('/about-me');
        cy.get('.exit').click();
        cy.get('.videoResponsive').should('exist');
    })

    
    it('should show the correct path inside the box depending on the current pathname - case /', () => {
        cy.visit('/');
        cy.get('.pathDark').contains('/about-me');
    })
    it('should show the correct path inside the box depending on the current pathname - case /about-me', () => {
        cy.visit('/about-me');
        cy.get('.pathDark').contains('/about-me');
    })
    it('should show the correct path inside the box depending on the current pathname - case /projects', () => {
        cy.visit('/projects');
        cy.get('.pathDark').contains('/projects');
    })
    it('should show the correct path inside the box depending on the current pathname - case /resume', () => {
        cy.visit('/resume');
        cy.get('.pathDark').contains('/resume');
    })
    it('should show the correct path inside the box depending on the current pathname - case /contact', () => {
        cy.visit('/contact');
        cy.get('.pathDark').contains('/contact');
    })
})