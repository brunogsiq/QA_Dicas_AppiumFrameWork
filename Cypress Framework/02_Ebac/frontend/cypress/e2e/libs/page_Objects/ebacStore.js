export function elemEbacShop() {
    return {
        //Legendas: c = css - d = div - i = input - t = texto 
        //Elem.Home
        cLogo: ".logo > a > .logo-img",
        cLogin: ".dropdown.menu > a",
        //Elem Minha Conta
        divForm: ".row > #main-content > #main > .woocommerce > #customer_login",
        tLogin: "Login",
        cIdentUsername: "label[for='username']",
        iUsername: "#username",
        tUsername: "Username or email address ",
        tPassword: "Password ",
        cIdentPass: "label[for='password']",
        iPassword: "#password",
        btnLogin: "input[name='login']",
        cError: ".woocommerce-error > li",
        tLoginVazio: "Nome de usuário é obrigatório.",
        tPassVazio: " o campo da senha está vazio.",
        tLoginWrong: "não está cadastrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.",
        cIdentUser: "span.hidden-xs",
        tRegister: "Register",
        cRegSenhaVazia: ".woocommerce-password-strength",

        //Tela Comprar
        btnComprar: "#primary-menu > li > a[href='http://lojaebac.ebaconline.art.br/produtos/']",
        cTitleComprar: "h1.page-title",
    }
}