class SignupPage {
    //NomeDaFuncao em Pascal Case: Utilizado em classes
    //nomeDaFuncao em Camel Case: Utilizado em funções

    go() {
        //redimensionar a página de visualização dos testes
        cy.visit('/')

        cy.get('a[href = "/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    //Utilizado no teste onde todos os dados estão ok
    fillForm(deliver) {

        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        //Utiliza-se should para realização de verificações
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        //contains vai buscar um alemento através de texto
        cy.contains('.delivery-method li', deliver.deliver_method_1).click()
        cy.contains('.delivery-method li', deliver.deliver_method_2).click()
        cy.contains('.delivery-method li', deliver.deliver_method_3).click()
        cy.contains('.delivery-method li', deliver.deliver_method_2).click()
        cy.contains('.delivery-method li', deliver.deliver_method_3).click()

        //arquivo de imagem
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    }

    //Utilizado no teste de nome incorreto
    fillForm2(deliver) {

        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        //Utiliza-se should para realização de verificações
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        //contains vai buscar um alemento através de texto
        cy.contains('.delivery-method li', deliver.deliver_method_1).click()
        cy.contains('.delivery-method li', deliver.deliver_method_2).click()
        cy.contains('.delivery-method li', deliver.deliver_method_3).click()
        cy.contains('.delivery-method li', deliver.deliver_method_2).click()
        cy.contains('.delivery-method li', deliver.deliver_method_3).click()

        //arquivo de imagem
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    }

    //Utilizado no teste de número incorreto
    fillForm3(deliver) {

        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        //Utiliza-se should para realização de verificações
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        //contains vai buscar um alemento através de texto
        cy.contains('.delivery-method li', deliver.deliver_method_1).click()
        cy.contains('.delivery-method li', deliver.deliver_method_2).click()
        cy.contains('.delivery-method li', deliver.deliver_method_3).click()
        cy.contains('.delivery-method li', deliver.deliver_method_2).click()
        cy.contains('.delivery-method li', deliver.deliver_method_3).click()

        //arquivo de imagem
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    }

    //Uilizado no teste de modo de entrega incorreto
    fillForm4(deliver) {

        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        //Utiliza-se should para realização de verificações
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        //contains vai buscar um alemento através de texto

        //arquivo de imagem
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    }

    //Utilizado no teste de cnh incorreta
    fillForm5(deliver) {

        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        //Utiliza-se should para realização de verificações
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        //contains vai buscar um alemento através de texto
        cy.contains('.delivery-method li', deliver.deliver_method_1).click()
        cy.contains('.delivery-method li', deliver.deliver_method_2).click()
        cy.contains('.delivery-method li', deliver.deliver_method_3).click()
        cy.contains('.delivery-method li', deliver.deliver_method_2).click()
        cy.contains('.delivery-method li', deliver.deliver_method_3).click()

    }

    //Utilizado no teste de cep incorreto
    fillForm6(deliver) {

        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        //Utiliza-se should para realização de verificações
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        //contains vai buscar um alemento através de texto
        cy.contains('.delivery-method li', deliver.deliver_method_1).click()
        cy.contains('.delivery-method li', deliver.deliver_method_2).click()
        cy.contains('.delivery-method li', deliver.deliver_method_3).click()
        cy.contains('.delivery-method li', deliver.deliver_method_2).click()
        cy.contains('.delivery-method li', deliver.deliver_method_3).click()

        //arquivo de imagem
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    }

    //Utilizado no teste de todas as mensagens de alerta
    fillForm7(deliver) {

        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

    }

    submit() {
        cy.get('form button[type= "submit"]').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {
        cy.get('.alert-error').should('have.text', expectedMessage)
    }

}

export default new SignupPage;