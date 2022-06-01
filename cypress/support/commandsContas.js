import loc from './locators'

Cypress.Commands.add('acessarMenuConta', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
})

Cypress.Commands.add('inserirConta', (nome_conta) => {
    cy.get(loc.CONTAS.NOME).type(nome_conta)
    cy.get(loc.CONTAS.BTN_SALVAR).click()
})

Cypress.Commands.add('closeAllToasts', () => {
    cy.get(loc.TOAST.BTN_CLOSE).each(($el, index, $list) => {
        cy.wrap($el).click()
    })
})