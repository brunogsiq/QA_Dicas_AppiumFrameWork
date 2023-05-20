/// <reference types="cypress" /> 

import { acessUrl } from "../libs/functions/01_acessUrl"

describe('Validar acesso a url do projeto', () => {
    it('Validar acesso a url do projeto', () => {
        acessUrl()
    });
});