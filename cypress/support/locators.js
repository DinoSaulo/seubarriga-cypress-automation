const locators = {
    LOGIN:{
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIENTACAO: '[data-test=menu-movimentacao]'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        XP_BTN_ALTERAR: "//table//td[contains(.,'Conta de teste')]/..//i[@class='far fa-edit']"
    },
    TOAST: {
        MESSAGE: '.toast-message',
        BTN_CLOSE: '.toast-close-button'
    },
    MOVIENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        INTERESSADO: '[data-test=envolvido]',
        BTN_SALVAR: '.btn-primary',
    },
    EXTRATO: {
        LINHAS: '.list-group > li',
        XP_BUSCA_ELEMENTO: "//span[contains(.,'Desc')]/following-sibling::small[contains(.,'123')]"
    },
}

export default locators;