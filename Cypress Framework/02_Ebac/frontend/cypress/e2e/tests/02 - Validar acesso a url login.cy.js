/// <reference types="cypress" /> 

import { acessLogin } from "../libs/functions/01_acessUrl"

describe('Validar acesso a a url Minha Conta', () => {
    it('Validar acesso a a url Minha Conta', () => {
        acessLogin()
    });
});