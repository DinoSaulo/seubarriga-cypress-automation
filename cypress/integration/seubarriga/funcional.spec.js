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
        cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta de teste')).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.TOAST.MESSAGE).should('contain', 'Conta atualizada com sucesso!')

    })

    it('Should not create an account with same name', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste 2')

        cy.closeAllToasts()

        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste 2')

        cy.get(loc.TOAST.MESSAGE).should('contain', 'code 400')

    })

    it('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIENTACAO).click()

        cy.get(loc.MOVIENTACAO.DESCRICAO).type('Desc')
        cy.get(loc.MOVIENTACAO.VALOR).type('123')
        cy.get(loc.MOVIENTACAO.INTERESSADO).type('Inter')
        cy.get(loc.MOVIENTACAO.CONTA).select('Conta alterada')
        cy.get(loc.MOVIENTACAO.STATUS).click()
        cy.get(loc.MOVIENTACAO.BTN_SALVAR).click()

        cy.get(loc.TOAST.MESSAGE).should('contain', 'sucesso')
        cy.url().should('contain', '/extrato')
        cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
        cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('Desc', '123')).should('exist')
    })

    it('Should get ballance', () => {

        cy.get(loc.MENU.MOVIENTACAO).click()

        cy.get(loc.MOVIENTACAO.DESCRICAO).type('Cont')
        cy.get(loc.MOVIENTACAO.VALOR).type('123')
        cy.get(loc.MOVIENTACAO.INTERESSADO).type('Inter')
        cy.get(loc.MOVIENTACAO.CONTA).select('Conta alterada')
        cy.get(loc.MOVIENTACAO.STATUS).click()
        cy.get(loc.MOVIENTACAO.BTN_SALVAR).click()

        cy.get(loc.MENU.HOME).click()

        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta alterada')).should('contain', '246,00')
    })

    it('Should remove a transaction', () => {
        cy.get(loc.MENU.EXTRATO).click()

        cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO('Desc')).click()
        cy.get(loc.TOAST.MESSAGE).should('contain', 'sucesso')
    })
})