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
        try {
            cy.wrap($el).should('be.visible').click()
        }
        catch (e) {
        }
    })
})

Cypress.Commands.add('fillTomorrowDateInInputDate', (input_locator) => {
    let tomorrow = new Date(new Date())
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow = tomorrow.toISOString().split('T')[0]

    cy.get(input_locator).type(tomorrow)
})