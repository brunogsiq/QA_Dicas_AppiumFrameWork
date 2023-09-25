import { signup } from '../../pages/SignupPage'

describe('Signup', () => {

    beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    })

    it('User should be deliver', function () {

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect Name', function () {

        signup.go()
        signup.fillForm2(this.deliver.name_inv)
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')

    })

    it('Incorrect Document - CPF', function () {

        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Incorrect Email', function () {

        signup.go()
        signup.fillForm(this.deliver.email_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    it('Incorrect Whatsapp', function () {

        signup.go()
        signup.fillForm(this.deliver.whatsapp_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Whatsapp com formato incorreto')

    })

    it('Incorrect CEP', function () {

        signup.go()
        signup.fillForm6(this.deliver.cep_inv)
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o CEP')

    })

    it('Incorrect Number', function () {

        signup.go()
        signup.fillForm3(this.deliver.number_inv)
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o número do endereço')

    })

    it('Incorrect Delivery', function () {

        signup.go()
        signup.fillForm4(this.deliver.delivery_inv)
        signup.submit()
        signup.alertMessageShouldBe('Selecione o método de entrega')

    })

    it('Incorrect Cnh', function () {

        signup.go()
        signup.fillForm5(this.deliver.cnh_inv)
        signup.submit()
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')

    })

    /*it('Incorrect All', function () {

        signup.go()
        signup.fillForm7(this.deliver.all_message_inv)
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })*/

})
