var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: '${firstName} ${lastName}',
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '13123456789',
            address: {
                postalcode: '11050031',
                street: 'Rua Alexandre Herculano',
                number: '140',
                details: 'Apt 17',
                district: 'Gonzaga',
                city_state: 'Santos/SP'
            },
            deliver_method_1: 'Moto',
            deliver_method_2: 'Bike Elétrica',
            deliver_method_3: 'Van/Carro',
            cnh: 'cnh-digital.jpeg'

        }

        return data

    }

}