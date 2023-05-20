/// <reference types='cypress' />

import { visit_With_Cookie } from '../lib/functions/_cypress';
import { validate_Alerts, validate_Domains_Int } from '../lib/functions/03_validate_Domains_Int';

describe('03 - Validação de domínio internacional', () => {
	beforeEach(() => {
		visit_With_Cookie();
	});
	
	it('03_1 - Validar domínio internacional inválido - vazio', () => {
		var testData = {
			domain: ' ',
		};
		validate_Domains_Int(testData);
		validate_Alerts(testData);
	});
	it('03_2 - Validar domínio interinternacional inválido - caracteres especiais', () => {
		var testData = {
			domain: '!@#$%',
		};
		validate_Domains_Int(testData);
		validate_Alerts(testData);
	});

	it('03_3 - Validar domínio internacional inválido - caracteres númericos', () => {
		var testData = {
			domain: '123456',
		};
		validate_Domains_Int(testData);
		validate_Alerts(testData);
	});

	it('03_4 - Validar domínio internacional válido - existente', () => {
		var testData = {
			domain: 'teste',
		};
		validate_Domains_Int(testData);
		validate_Alerts(testData);
	});

	it('03_5 - Validar domínio internacional válido - inexistente', () => {
		var testData = {
			domain: 'testevalido',
		};
		validate_Domains_Int(testData);
		validate_Alerts(testData);
	});
});
