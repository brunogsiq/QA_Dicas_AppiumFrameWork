/*
Dependências Instaladas:
    cy.waitUntil    :
                        Para instalar:
                            npm install -D cypress-wait-until
                        Após, na pasta cypress/support/commands.js  ,insere o código: 
                            import 'cypress-wait-until';
                        Após, na pasta cypress/support/e2e.js   ,insere o código:
                            require('cypress-wait-until')
                        Exemplo:
                            cy.waitUntil(() => cy.getCookie('token').then(cookie => Boolean(cookie && cookie.value)));



    cy.xpath        :
                        Para instalar:
                            npm install -D cypress-xpath
                        Após, na pasta cypress/support/e2e.js   ,insere o código:
                            require('cypress-xpath');
                        Exemplos:
                            it.('finds list items', () => {
                            cy.xpath('//ul[@class="todo-list"]//li').should('have.length', 3);
                            });

    Lib´s Faker
                        Para Instalar
                            npm install @faker-js/faker --save-dev
                        Após, na pasta cypress/support/commands.js  ,insere o código:
                            import { faker } from '@faker-js/faker';
                        No arquivo que iremos utilizar a biblioteca, será inserido:
                            const randomName = faker.name.fullName(); // Rowan Nikolaus
                            const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
*/


