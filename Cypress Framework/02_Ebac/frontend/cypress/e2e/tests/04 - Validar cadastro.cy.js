/// <reference types="cypress" /> 

import { acessLogin } from "../libs/functions/01_acessUrl";
import { validateCadastro } from "../libs/functions/03_Cadastro";
//var faker = require('faker');
const { faker } = require('@faker-js/faker');

describe('Validar Cadastro', () => {

    beforeEach(() => {
        acessLogin()
    })

    it('Cadastro Empty', () => {
        var testData = {
            email: '',
            password: '',
            testOk: false
        }
        validateCadastro(testData)
    })

    it('Cadastro com senha 2 caracter', () => {
        var testData = {
            email: 'brunogsiq@gmail.com',
            password: '1a',
            testOk: false
        }
        validateCadastro(testData)
    })

    it('Cadastro com senha 11 caracter', () => {
        var testData = {
            email: 'brunogsiq@gmail.com',
            password: '123abc789de',
            testOk: false
        }
        validateCadastro(testData)
    })

    it('Cadastro com senha 12 somente c/ letras', () => {
        var testData = {
            email: 'brunogsiq@gmail.com',
            password: 'abcabcabcaC',
            testOk: false
        }
        validateCadastro(testData)
    })

    it('Cadastro com senha 13 Letra M+N', () => {
        var testData = {
            email: 'brunogsiq@gmail.com',
            password: 'Abcdefghijkl1',
            testOk: false
        }
        validateCadastro(testData)
    })

    it('Cadastro com senha dentro do padrão', () => {
        var testData = {
            email: 'brunogsiq@gmail.com',
            password: 'abc123DEF456!$!?',
            testOk: false
        }
        validateCadastro(testData)
    })

    it('Cadastro Novo', () => {
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password(12, false, /[\w\d\S]*[\w\d\S\?][\w\d\S]*/);
        var testData = {
            email: randomEmail,
            password: randomPassword,
            testOk: true
        }
        validateCadastro(testData)
    })
})