export function elemHomePage() {
    return {
        //Elementos Home Page
        acceptPrivTerm: "a#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm",
        logo: ".vr-logo__image.vr-svg",
        title: "VR - Benefícios",
        
        //Elementos Pra Você
        aPraVc : "a[href='/onde-aceita.htm']" ,
        aRedeCred: "a.vr-button.vr-button--negative[href='#rede-credenciada']",
        txtRedeCred: " Onde usar o meu cartão ",

        //Elementos Onde usar meu cartao
        inpDigite: ".form-search-estab > .box-gray > #endereco",
        inpGetDigite: '.form-search-estab > .box-gray > input[placeholder="Digite o nome ou endereço de um lugar"]',
        txtDigite:"Digite o nome ou endereço de um lugar",
        iconSearch: ".box-icon__search > .icon-search",
        btnSelecioneVR: ".box-button > #buttonFiltrar",
        txtSelecioneVR: "Selecione um cartão VR...",
        optSearch: ".box-button > #buscarResultados",
        txtSearch:"Buscar",
        optClose: "button.mfp-close",

        //Elementos de preenchimento
        map: "#map",
        city: ".box-autocomplete > ul > li[data-place-id='ChIJOxw7PEIDzpQRT2Rj_O3OTVg'] > span.autocomplete-text",
        alimCesta: "#vr-card-201",
        confirmar: "button#buttonFiltrarCards",
        iframe: "iframe[frameborder]",
    };
}

