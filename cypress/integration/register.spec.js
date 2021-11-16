/// <reference types="cypress" />

var chance = require('chance')
var chance = new Chance()

describe('Register', () => {
    it('Given the data is informed and finalized then register should be done', () => {
        cy.visit('https://form-agilizei.netlify.app/index.html')
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        cy.get('input[value=n]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

        cy.get('select#countries').select('Bangladesh', {force: true})
        cy.get('select#years').select('1990', {force: true})
        cy.get('select#months').select('Agosto', {force: true})
        cy.get('select#days').select('28', {force: true})

        cy.get('input#firstpassword').type('Alunos2021')
        cy.get('input#secondpassword').type('Alunos2021')

        cy.contains('Finalizar cadastro').click()

        cy.url().should('contain','listagem')

    });
});