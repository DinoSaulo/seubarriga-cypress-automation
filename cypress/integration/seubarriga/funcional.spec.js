/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Should test at a funcional level', () => {
    before( () => {
        cy.visit('https://barrigareact.wcaquino.me/')

        cy.login('a@a', 'a')
        cy.resetApp()

    })

    it('Should create an acount', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste')

        cy.get(loc.TOAST.MESSAGE).should('contain', 'Conta inserida com sucesso!')
    })

    it('Should edit an acount', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.TOAST.MESSAGE).should('contain', 'Conta atualizada com sucesso!')

    })

    it.only('Should not create an account with same name', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste 2')

        cy.closeAllToasts()

        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste 2')

        cy.get(loc.TOAST.MESSAGE).should('contain', 'code 400')

    })

    it.only('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIENTACAO).click()

        cy.get(loc.MOVIENTACAO.DESCRICAO).type('Desc')
        cy.get(loc.MOVIENTACAO.VALOR).type('123')
        cy.get(loc.MOVIENTACAO.INTERESSADO).type('Inter')
        cy.get(loc.MOVIENTACAO.BTN_SALVAR).click()

        cy.get(loc.TOAST.MESSAGE).should('contain', 'sucesso')
        cy.url().should('contain', '/extrato')
        cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
        cy.xpath(loc.EXTRATO.XP_BUSCA_ELEMENTO).should('exist')
    })
})