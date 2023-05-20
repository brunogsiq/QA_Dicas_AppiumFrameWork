/// <reference types="cypress"/>

import { accept_Cookie, visit_Url, visit_With_Cookie } from "../lib/functions/_cypress";
import { validate_Acess_Url } from "../lib/functions/01_validate_Acess_Url";

describe('01 - Validar acesso a tela de registro de domínio', () => {

    /*
    Dado que a tela de registro de domínio precisa ser acessada,
    Quando inserir a url https://www.locaweb.com.br/registro-de-dominio/
    Então o sistema deve redirecionar para rota escolhida. 
    */
    it('01_1 - Validar acesso a tela de registro de domínio', () => {
        visit_Url();
    });

    /*
    Dado que a tela de registro de domínio está sendo visualizada,
    Quando aceitar o pedido para concoorda com uso de cookies,
    Então o sistema deve fechar o aviso permitindo a navegação normalmente. 
    */

    it('01_2 - Validar aceite de cookies', () => {
        visit_Url()
        accept_Cookie()
    });

    /*
    Dado que a tela de registro de domínio está sendo visualizada,
    Quando observar os elementos apresentados,
    Então o sistema deve apresentar a peça publicitária definida que contém a mensagem "Registre seu domínio e garanta o endereço do seu site". 
    */

    it('01_3 Validar visualização de peça publicitária', () => {
        visit_With_Cookie()
        validate_Acess_Url()
    });
})