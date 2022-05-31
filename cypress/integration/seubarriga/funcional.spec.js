/// <reference types="cypress"/>

import loc from '../../support/locators'

describe('Should test at a funcional level', () => {
    before( () => {
        cy.visit('https://barrigareact.wcaquino.me/')

        cy.get(loc.LOGIN.USER).type('a@a')
        cy.get(loc.LOGIN.PASSWORD).type('a')
        cy.get(loc.LOGIN.BTN_LOGIN).click()
        cy.get(loc.TOAST).should('contain', 'Bem vindo')

        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.RESET).click()

    })

    it('Should create an acount', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Conta de teste')
        cy.get(loc.CONTAS.BTN_SALVAR).click()

        cy.get(loc.TOAST).should('contain', 'Conta inserida com sucesso!')
    })

    it('Should edit an acount', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.TOAST).should('contain', 'Conta atualizada com sucesso!')

    })
})