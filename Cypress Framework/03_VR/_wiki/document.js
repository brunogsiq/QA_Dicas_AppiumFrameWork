/*
Após clonar projeto, no terminal da IDE ou CMD, no caminho: ...EluminiIr_VR/frontend/automation
        realizar o comando : npm i
                Obs: Pois a pasta node_modules foi ignorada na hora de realiar o upload do projeto

Será necessário instalar as dependência xpath, waitUntil, .
        npm install -D cypress-xpath
        npm install -D cypress-wait-until

Os testes poderaão ter seu título inseridos no cypress.congif.js

Estruturação do Projeto:
        Frontend:
        wiki/document.js = documentação dos testes e regras para execução dos mesmo.

        cypress/tests = todos os arquivos necessários para rodar automação encontram-se nesta pasta.
            /lib/functions = funções dos testes para exercução da lógica de programação.
            /lib/pageObjects = mapeamento dos elementos html e css.
            /lib/scenes = cenários de testes para serem executados.
*/

/*
Teste Prático
Obrigado por participar do nosso processo seletivo da VR Benefícios. Nossa stack tecnológica aqui é Cypress para
***teste de frontend e Cucumber + Ruby + HTTParty para teste de backend.
        Que tal fazer um teste de cada no nosso portal?
        Regras:
        • Todos os exercícios devem ser entregues em um repositório público do GitHub
        • Lembre-se de incluir comentários nos seus arquivos. Eles são importantes para entendermos seu modo de
        pensar.
        • Os exercícios devem ser entregues em até́ uma semana a partir do recebimento
        Frontend:
        - Criar uma automação que entre no site www.vr.com.br;
        - Navegar até́ a seção “Pra Você̂” (/onde-aceita.htm);
        - Clicar no botão “Onde usar meu cartão VR”;
        - Validar que o mapa do Google abriu em tela.
        Backend:
        Temos um endpoint de consulta exposto no nosso portal que nos retorna uma série de informações sobre
        nossos produtos e estabelecimentos.
        (https://portal.vr.com.br/api-web/comum/enumerations/VRPAT)
Crie um cenário, utilizando Cucumber + Ruby + HTTParty, que valide que o JSON retornado pelo serviço
possui a chave “typeOfEstablishment” e print, aleatoriamente, um desses tipos de estabelecimentos
*/