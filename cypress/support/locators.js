const locators = {
    LOGIN:{
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        HOME: '[data-test=menu-home]',
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIENTACAO: '[data-test=menu-movimentacao]',
        EXTRATO: '[data-test=menu-extrato]'
    },
    HOME: {
        XP_TABLE_DATA: "//table/tbody",
    },
    CONTAS: {
        XP_TABLE_DATA: "//table/tbody",
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        FN_XP_BTN_ALTERAR: (nome_conta) => `//table//td[contains(.,'${nome_conta}')]/..//i[@class='far fa-edit']`,
        FN_XP_BTN_EXCLUIR: (nome_conta) => `//table//td[contains(.,'${nome_conta}')]/..//i[@class='far fa-trash-alt']`
    },
    TOAST: {
        MESSAGE: '.toast-message',
        BTN_CLOSE: '.toast-close-button'
    },
    MOVIENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        INTERESSADO: '[data-test=envolvido]',
        CONTA: '[data-test=conta]',
        STATUS: '[data-test=status]',
        BTN_SALVAR: '.btn-primary',
        BTN_CONTA_PENDENTE: "button[title='Conta Pendente']",
        BTN_CONTA_PAGA: "button[title='Conta Paga']",
        DATA_TRANSACAO: '[data-test=data-transacao]',
        DATA_PAGAMENTO: '[data-test=data-pagamento]'
    },
    EXTRATO: {
        LINHAS: '.list-group > li',
        FN_XP_BUSCA_ELEMENTO: (desc, value) => `//span[contains(.,'${desc}')]/following-sibling::small[contains(.,'${value}')]`,
        FN_XP_REMOVER_ELEMENTO: (nome_conta) => `//span[contains(.,'${nome_conta}')]/../../..//i[@class='far fa-trash-alt']`,
        FN_XP_ALTERAR_ELEMENTO: (nome_conta) => `//span[contains(.,'${nome_conta}')]/../../..//i[@class='fas fa-edit']`
    },
    SALDO: {
        FN_XP_SALDO_CONTA: (nome_conta) => `//td[contains(.,'${nome_conta}')]/../td[2]`
    }
}

export default locators;