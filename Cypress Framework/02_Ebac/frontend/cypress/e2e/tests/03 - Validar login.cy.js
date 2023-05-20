/// <reference types="cypress" /> 

import { acessLogin } from "../libs/functions/01_acessUrl";
import { validateLogin } from "../libs/functions/02_Login"

describe('Validar Login', () => {

    beforeEach(() => {
        acessLogin()
    })

    it('User Empty & Pass Empty', () => {
        var testData = {
            username: '',
            password: '',
            testOk: false
        }
        validateLogin(testData)
    });

    it('User Wrong & Pass Empty', () => {
        var testData = {
            username: 'userTest',
            password: '',
            testOk: false
        }
        validateLogin(testData)
    });

    it('User Ok & Pass Empty', () => {
        var testData = {
            username: 'aluno_ebac@teste.com',
            password: '',
            testOk: false
        }
        validateLogin(testData)
    });

    it('User Ok & Pass Empty', () => {
        var testData = {
            username: 'aluno_ebac@teste.com',
            password: '',
            testOk: false
        }
        validateLogin(testData)
    });

    it('User Ok & Pass Ok', () => {
        var testData = {
            username: 'aluno_ebac@teste.com',
            password: 'teste@teste.com',
            testOk: true
        }
        validateLogin(testData)
    });
});
