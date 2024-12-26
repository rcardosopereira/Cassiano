/// <reference types= "cypress" />
describe('Acesso ao SL+', () => {

    it('Deve fazer login no Sou Log +', () => {
            
            cy.visit('https://plataforma-dev.ticketlog.com.br/')
           // cy.wait(10000)

            Cypress.on('uncaught:exception', (err, runnable) => {
                    return false;
            });

            cy.origin('https://sso.sbx.edenred.io', () => {
                    Cypress.on('uncaught:exception', (err, runnable) => {
                            return false
                    })                        
                   // cy.get('#Username').should('be.visible')
                    cy.get('#Username').type('cass@hotmail.com')
                   // cy.get('#Password').should('be.visible')
                    cy.get('#Password').type('Des123')
                    cy.get('#login').click()                        
                   // cy.wait(30000)                                           
            })                
            cy.get('#priceManagement').click({force: true})
            cy.wait(10000)
            cy.get('[data-cy="sidebar-submenu-link-negotiation-panel"] > .sublist-content > [data-cy="submenu-label"]').click({force: true})
            cy.wait(4000)
            cy.get('rep-negotiation-panel-list > ed-page-view > div > div > div.ed-page-view > div > div > ed-tabset > ed-tabs-nav > div.ed-tabs-extra-content.ng-star-inserted > button').click({force: true})
            cy.wait(2000)
            cy.get('rep-basic-data-negotiation > form > div:nth-child(2) > div > ed-input-wrapper > ed-select > ng-select > div').click({force: true})
            cy.wait(1000)
            cy.get('input[class="select-search-input"]').click({force: true}).type('Gasolina Comum')
            cy.wait(1000)
            cy.get('rep-basic-data-negotiation > form > div:nth-child(2) > div > ed-input-wrapper > ed-select > ng-select > ng-dropdown-panel > div:nth-child(2) > div > div').click({force: true})
            cy.wait(1000)
            cy.get('[data-cy="wizard-btn-next-state"]').click({force: true})
            
    })
});
