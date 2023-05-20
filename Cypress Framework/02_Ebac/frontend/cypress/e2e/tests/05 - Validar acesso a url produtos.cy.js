/// <reference types="cypress" /> 

import { acessLogin } from "../libs/functions/01_acessUrl";
import { validateComprar } from "../libs/functions/04_Comprar";

describe('Validar funcionalidades da tela Comprar', () => {

    beforeEach(() => {
        acessLogin()
    })

    it('Validar acesso a tela de Produtos', () => {
        validateComprar()
    })

})