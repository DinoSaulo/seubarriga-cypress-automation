/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Should test at a funcional level', () => {
    before( () => {
        cy.visit('https://barrigareact.wcaquino.me/')

        cy.login('a@a', 'a')
        cy.resetApp()

    })

    beforeEach(() => {
        cy.get(loc.MENU.HOME).click()
        cy.resetApp()
    })

    describe('Count tests', () => {
        it('Should create an acount', () => {
            cy.acessarMenuConta()
            cy.inserirConta('Conta de teste')

            cy.get(loc.TOAST.MESSAGE).should('contain', 'Conta inserida com sucesso!')
        })

        it('Should edit an acount', () => {
            cy.get(loc.MENU.SETTINGS).click()
            cy.get(loc.MENU.CONTAS).click()
            cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta para alterar')).click()
            cy.get(loc.CONTAS.NOME)
                .clear()
                .type('Conta alterada')
            cy.get(loc.CONTAS.BTN_SALVAR).click()
            cy.get(loc.TOAST.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
        })

        it('Should delete an acount', () => {
            cy.get(loc.MENU.SETTINGS).click()
            cy.get(loc.MENU.CONTAS).click()

            cy.inserirConta('Conta para deletar')
            cy.get(loc.TOAST.MESSAGE).should('contain', 'Conta inserida com sucesso!')

            cy.xpath(loc.CONTAS.FN_XP_BTN_EXCLUIR('Conta para deletar')).click()
            cy.get(loc.TOAST.MESSAGE).should('contain', 'Conta excluída com sucesso!')
        })
    })

    it('Should not create an account with same name', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta mesmo nome')

        cy.get(loc.TOAST.MESSAGE).should('contain', 'code 400')
    })

    it('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIENTACAO).click()

        cy.get(loc.MOVIENTACAO.DESCRICAO).type('Desc')
        cy.get(loc.MOVIENTACAO.VALOR).type('123')
        cy.get(loc.MOVIENTACAO.INTERESSADO).type('Inter')
        cy.get(loc.MOVIENTACAO.CONTA).select('Conta para movimentacoes')
        cy.get(loc.MOVIENTACAO.STATUS).click()
        cy.get(loc.MOVIENTACAO.BTN_SALVAR).click()

        cy.get(loc.TOAST.MESSAGE).should('contain', 'sucesso')
        cy.url().should('contain', '/extrato')
        cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
        cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('Desc', '123')).should('exist')
    })

    it('Should get ballance', () => {

        cy.get(loc.MENU.HOME).click()

        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', '534,00')

        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_ALTERAR_ELEMENTO('Movimentacao 1, calculo saldo')).click()
        //cy.wait(1000)
        cy.get(loc.MOVIENTACAO.DESCRICAO).should('have.value', 'Movimentacao 1, calculo saldo') //verificação para manter o sincronismo
        cy.get(loc.MOVIENTACAO.STATUS).click()
        cy.get(loc.MOVIENTACAO.BTN_SALVAR).click()

        cy.get(loc.TOAST.MESSAGE).should('contain', 'sucesso')

        cy.get(loc.MENU.HOME).click()

        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', '4.034,00')

    })

    it('Should remove a transaction', () => {
        cy.get(loc.MENU.EXTRATO).click()

        cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO('Movimentacao para exclusao')).click()
        cy.get(loc.TOAST.MESSAGE).should('contain', 'sucesso')
    })
})