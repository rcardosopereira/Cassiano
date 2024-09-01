/// <reference types="cypress" />

describe('Acesso ao SL+', () => {
    beforeEach(() => {
      cy.visit('https://plataforma-dev.ticketlog.com.br/');
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false; 
      });
    });
  
    it('Deve fazer login no Sou Log +', () => {
      cy.origin('https://sso.sbx.edenred.io', () => {
        Cypress.Commands.add('login', (username, password) => {
          cy.get('#Username').should('be.visible').type(username);
          cy.get('#Password').should('be.visible').type(password);
          cy.get('#login').should('be.visible').click();
        });
        // Carrega os dados do usuário a partir do fixture
        cy.fixture('data').then((data) => {
          cy.login(data.user, data.password); // Usa o comando personalizado redefinido dentro do cy.origin
        });
      });
    });
  });
  