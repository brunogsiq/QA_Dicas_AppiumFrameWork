/*
    Tipos de Teste

        Visão Macro:

            Testes de Hardware:
                Verifica o funcionamento dos componenetes fisícos como Câmera, Wi-fi, Gps, Tela.

            Testes de Software:
                Verifica o funcionamento da parte lógica como aplicativos e sistemas operacionais, como android, ios, windowsphone.

    Tipos de Aplicativos:

        Nativos:
            Desenvolvidos diretamente para a plataforma, geralmente mais rápidos, e dependentes de downloads e instalações.

        Mobile web:
            Executados em um servidor, dependerão de um navegador, desenvolvidos em html, css, java entre outras linguagens.

        Híbridos:
            Combinação de aplicativos nativos e web, desenvolvidos também a partir de uma línguagem de programação com acesso a parte do hardware.

    Estratégias de Testes:

        Instalação do app:
        Desinstalação do app:
        Acesso ao servidor do app:
        Compatbilidade em diferentes periféricos:
            Versão de sistemas operacionais;
            Responsividade;
                Visualização dos componentes em tela;
                Perda ou não da função após reposicionamentos;
                Quebra da aparência ou sistema como um todo;
        Interface (Funcionais):
            Fluxos de navegação;
            Opções do menu;
            Configurações;
            Botões;
            Histórico;
            Favoritos;
        Usabilidade:
            Facilidade sobre a utilização do sistema;
            Experiência do usuário quanto a UX é bacana;
        Conectividade:
            Testes de verificação on-line e Off-line;
        Performance:
            Reação em diferentes condições de conexões;
            Consumo de bateria;
            Uso de processadores;
            Etc;
        Segurança:
            Relativos aos dados armazenados pelo app;
        Operacional:
            Recuperação;
            Perda de dados;
            Backups;
        Recursos de baixo nível:
            Uso de memória;
            Problemas com banco de dados local;
            Exclusão automática de arquivos temporários;

    Planos de Teste:

        Identificar os tipos de testes que deverão ser relizados baseados em:
            Documentação; 
            Histórias de Usuários;
            Outras base fundamentadas em possíveis anotações;
        Mapeamento dos cenários:
            Quais deverão os testes funcionais e não funcionais;
            Quais serãos os testes relevantes para determinadas funcionalidades;
        Escolha de devices:
            Entender nosso público alvo em relação ao tipo de device;
            Entender nosso público alvo em relação ao tipo de sistema operacional;
        Uso de emuladores:
        Uso de aparelhos fisícos:
        Uso de device farm:
        Automação de testes:
        Publicação:
            Verificação da integridade ao disponiibilizar o app;
                Testes Alpha e Beta;

    Liks úteis:
        Página oficial WebdriverIO - https://webdriver.io/ 
        Página oficial Appium - http://appium.io/ 
        Página oficial Browserstack - https://www.browserstack.com/ 
        Seletores Mobile WebdriverIO - https://webdriver.io/docs/selectors#mobile-selectors 
        Seletores Mobile Appium - https://appium.io/docs/en/commands/element/find-elements/ 
        Seletores Nativos Android - https://developer.android.com/reference/androidx/test/uiautomator/UiSelector 
        Seletores Nativos / Predicados iOS - https://developer.apple.com/documentation/foundation/nspredicate 
        Palestras do AppiumConf 2021 - https://www.youtube.com/hashtag/appiumconf2021 
        AWS Device Farm - https://docs.aws.amazon.com/pt_br/devicefarm/latest/developerguide/welcome.html 
        Sauce Labs - https://saucelabs.com/

Testes de versão de sw. Android

Testes de versão de vrs. de Apk

Testes de versão de devices, ou seja, tablet e celular, versões diversas

Testes de posição retrato ou paisagem

Compatibilidade de Dispositivos:
    Teste o aplicativo em uma variedade de dispositivos Android para garantir que ele funcione corretamente em diferentes tamanhos de tela, resoluções e versões do sistema operacional.

Navegação e Fluxo do Aplicativo:
    Verifique se a navegação pelo aplicativo é lógica e intuitiva.
    Teste o fluxo principal do aplicativo, incluindo navegação entre telas e funcionalidades.

Entrada de Dados:
    Teste todas as formas de entrada de dados, como campos de texto, botões, listas e seletores.
    Verifique se os teclados são exibidos e ocultados corretamente.

Compatibilidade com Orientação da Tela:
    Teste o aplicativo em ambas as orientações (retrato e paisagem).
    Certifique-se de que o layout e a funcionalidade não são prejudicados ao alterar a orientação.

Funcionalidades Específicas do Dispositivo:
    Teste funcionalidades específicas do dispositivo, como câmera, GPS, acelerômetro e sensor de luz.

Notificações e Alertas:
    Verifique se as notificações push e alertas do sistema são exibidos corretamente.
    Teste a resposta do aplicativo a notificações em diferentes estados (ativo, em segundo plano, fechado).

7. Testes de Desempenho:
    Avalie o desempenho do aplicativo em termos de tempo de resposta e consumo de recursos (CPU, memória).
    Realize testes de carga para garantir que o aplicativo funcione bem sob pressão.

8. Segurança:
    Verifique se os dados sensíveis são tratados de forma segura.
    Teste a autenticação e autorização.

9. Atualizações e Instalação:
    Teste o processo de atualização do aplicativo para garantir que os usuários possam migrar para novas versões sem problemas.
    Verifique se a instalação e desinstalação ocorrem sem erros.

10. Usabilidade e Interface do Usuário (UI/UX):
    Avalie a usabilidade do aplicativo, incluindo a intuitividade da interface do usuário.
    Garanta que os elementos de design estejam consistentes e sigam as diretrizes de design do sistema operacional.

11. Testes de Conectividade:
    Teste o aplicativo em diferentes condições de conectividade, como Wi-Fi, 3G, 4G e offline.

12. Testes de Interrupção:
    Avalie a resposta do aplicativo a interrupções, como chamadas telefônicas, mensagens e notificações.

13. Testes de Localização e Idioma:
    Teste o aplicativo em diferentes configurações de idioma e região.
    Verifique se a localização (GPS) funciona corretamente.

14. Logs e Mensagens de Erro:
    Verifique os logs do aplicativo para mensagens de erro.
    Certifique-se de que as mensagens de erro sejam compreensíveis e forneçam informações úteis.

15. Testes de Acessibilidade:
    Verifique a acessibilidade para usuários com deficiência visual, motora ou auditiva.

16. Conformidade com Padrões e Diretrizes:
    Garanta que o aplicativo esteja em conformidade com as diretrizes de design e os padrões da plataforma.

17. Testes de Atualização de SO:
    Teste o aplicativo em versões mais recentes do sistema operacional para garantir compatibilidade.
*/