/// <reference types="cypress" />

describe('Listing', () => {
    it('When there are no entries then the list must be empty', () => {
        cy.fixture('list-without-items').then(data =>{
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        cy.visit('https://form-agilizei.netlify.app/listagem.html')

        cy.get('table tbody tr').should('have.length', 0)
    });

    it('When there are entries then the list should show the records', () => {   
        cy.fixture('list-with-items').then(data =>{
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        cy.visit('https://form-agilizei.netlify.app/listagem.html')

        cy.get('table tbody tr').should('have.length', 1)
    });
});