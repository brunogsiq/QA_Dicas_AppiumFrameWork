//Agrupador de testes do Cypress

describe('POST /characters', function () {

    //step de gancho para complementar o testes.
    before(function () {
        cy.setToken()
        cy.back2ThePast()
    })

    // it - é o caso de testes do Cypress
    it('01 - Cadastro de Personagem - OK', function () {
        /*Definindo Massa de Teste;
        Formatação_padrão: json;
        {
        "name": "Logan",
        "alias": "Wolverine",
        "team": ["X-Men","Vingadores"],
        "active": true,

        "name": "Vegeta",
        "alias": "Vegeta",
        "team": ["Dragon Ball","Sayajins"],
        "active": true
        }

        Iremos readaptar...
        */

        //formatação padrão: javascript
        //const de constante é um objeto com valor imutável
        const character = {
            name: 'Tony Stark',
            alias: 'Homem de Ferro',
            team: ['Illuminatis","Vingadores'],
            active: true,

            name: 'Kakaroto',
            alias: 'Goku',
            team: ['Dragon Ball","Sayajins'],
            active: true
        }
        cy.api({
            method: 'POST',
            /* Url fica com este caminho, 
            pois foi cadastro no arquivo cypress.json
            a url base, para acesso da requisição POST.*/
            url: '/characters',
            body: character,
            headers: {
                Authorization: Cypress.env('token'),
            }
        }).then(function (response) /*callback da função request.*/ {
            //Validar primeiro o status code
            expect(response.status).to.eql(201)
            cy.log(response.body.character_id)
            expect(response.body.character_id.length).to.eql(24)
        })

    })

    context('02 - Quuando o personagem já existe', function () {

        const character = {
            name: 'Steve Rogers',
            alias: 'Capitão América',
            team: ['Vingadores'],
            active: true,

            name: 'Kuririn',
            alias: 'Kuririn',
            team: ['Dragon Ball', 'Humano'],
            active: true
        }

        before(function () {
            cy.api({
                method: 'POST',
                /* Url fica com este caminho, 
                pois foi cadastro no arquivo cypress.json
                a url base, para acesso da requisição POST.*/
                url: '/characters',
                body: character,
                headers: {
                    Authorization: Cypress.env('token'),
                }
            }).then(function (response) /*callback da função request.*/ {
                //Validar primeiro o status code
                expect(response.status).to.eql(201)
            })
        })

        it('03 - Não deve cadastrar personagem duplicado', function () {

            cy.api({
                method: 'POST',
                /* Url fica com este caminho, 
                pois foi cadastro no arquivo cypress.json
                a url base, para acesso da requisição POST.*/
                url: '/characters',
                body: character,
                headers: {
                    Authorization: Cypress.env('token'),
                },
                failOnStatusCode: false
            }).then(function (response) /*callback da função request.*/ {
                //Validar primeiro o status code
                expect(response.status).to.eql(400)
                expect(response.body.error).to.eql('Duplicate character')
            })

        })

    })

})

