/// <reference types="cypress"/> 


export function elemTelaCampoDeTrein() {
    return {
        //Url
        baseUrl: "https://wcaquino.me/cypress/componentes.html",
        baseUrl_3: "https://barrigareact.wcaquino.me/",

        //Elementos:
        xTitle: 
        "/html/body/center/form/h3",
        buttonClique:
        "#buttonSimple",
        xDivTextRodape:
        "/html/body/center/form/span",
        divResult:
        "#resultado",
        formSugest:
        "#elementosForm\\:sugestoes",
        xIpOne:
        "#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input",
        xIpTwo:
        "nth-child(2) > :nth-child(6) > input",
        xIpThree:
        ":nth-child(3) > :nth-child(6) > input",
        xIpFour:
        ":nth-child(4) > :nth-child(6) > input",
        xIpFive:
        ":nth-child(5) > :nth-child(6) > input",
        rdBtnMasc:
        "#formSexoMasc",
        rdBtnFem:
        "#formSexoFem",
        ipBtnCarne:
        "#formComidaCarne",
        ipBtnFrg:
        "#formComidaFrango",
        ipBtnPz:
        "#formComidaPizza",
        ipBtnVgt:
        "#formComidaVegetariana",
        cBEsc:
        "#formEscolaridade",
        formEsport:
        "#formEsportes",
        btnDelay:
        "buttonDelay",
        btnDelay:
        "#buttonDelay",
        nCamp:
        "#novoCampo",
        btnList:
        "#buttonList",
        btnLiDom:
        "#buttonListDOM",


        //Textos:
        textTitle:
        "Campo de Treinamento",
        textObrigado:
        "Obrigado!",
        textClique:
        "Clique Me!",
        divTextTabRodape:
        "Cuidado onde clica, muitas armadilhas...",
        textFormSugest:
        "Prática de teste com elementos utilizados estilo campos de texto",

        urlBase2: "http://www.google.com.br/",
        xTitleGg:
        "/html/body/div[1]/div[2]/div/img",

        xElemComida: "//label[contains(., 'Carne')]/preceding-sibling::input"
    }
}