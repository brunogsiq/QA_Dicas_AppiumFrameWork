*** Variables ***

#Test setup e Test teardown#
${urlProjeto}                        https://www.amazon.com.br
${navegador}                         chrome

#Home Page
${LOGO_HOME}                          xpath=//a[contains(@id,'nav-logo-sprites')]
${ELM_LOGIN}                          xpath=//a[@id='nav-link-accountList']

#Menu Principal
${MN_Todos}                           xpath=//a[contains(.,'Todos')]
${MN_Venda_na_amazon}                 xpath=(//a[contains(.,'Venda na Amazon')])[1]
${MN_Mais_vendidos}                   xpath=(//a[contains(.,'Mais Vendidos')])[1]
${MN_Oferta_do_Dia}                   xpath=//a[@href='/deals?ref_=nav_cs_gb'][contains(.,'Ofertas do Dia')]
${MN_Música}                          xpath=//a[@href='/music/unlimited?ref_=nav_cs_music'][contains(.,'Música')]
${MN_Atendimento_ao_Cliente}          xpath=//a[contains(.,'Atendimento ao Cliente')]
${MN_Prime}                           xpath=(//a[contains(.,'Prime')])[3]
${MN_Livros}                          xpath=(//a[contains(.,'Livros')])[1]
${MN_Eletrônicos}                     xpath=(//a[contains(.,'Eletrônicos')])[1]

#Eletrônicos e Tecnologi
${TTL_MN_Eletronicos}                 xpath=//h1[contains(.,'Eletrônicos e Tecnologia')]
${TXT_MN_Eletronicos}                 Eletrônicos e Tecnologia

#Pesquisa de Produto
${CAMPO_PESQUISADEPRODUTO}            xpath=//input[contains(@placeholder,'Pesquisa Amazon.com.br')]
${BTN_PESQUISAR}                      xpath=//input[contains(@type,'submit')]
${ELM_DEPARTAMENTO}                   xpath=//span[@class='a-size-base a-color-base puis-bold-weight-text'][contains(.,'Departamento')]
${ELM_PESQ01}                         xpath=(//span[contains(.,'Console Xbox Series S')])[2]
${Prod01}                             Corinthians
${Prod02}                             */#fkodjior

#Tela de Cadastro
${LOGO_LOGIN}                         xpath=//h1[contains(.,'Fazer login')]
${OPC_CRTACC}                         xpath=//a[contains(.,'Criar sua conta da Amazon')]
${BTN_CRTACC}                         xpath=//a[@id='createAccountSubmit']
${LOGO_CRTACC}                        xpath=//h1[@class='a-spacing-small'][contains(.,'Criar conta')]