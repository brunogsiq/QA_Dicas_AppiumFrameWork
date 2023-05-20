*** Settings ***
Documentation    Teste de negociação de figurinhas da copa do mundo

Resource    ../resources/main.resource

Test Setup          Star tests
Test Teardown       Finish tests


*** Test Cases ***
Realizar buscar sem retorno
    Do Login
    Search User    Corinthians
    Sleep    1.5
    Without nothing

Realizar busca aleatória
    Do Login
    Search User Aleatory    Fernando Papito
    Sleep    0.5
    Search User Aleatory    João Lucas
    Sleep    0.5
    Search User Aleatory    Seu Madruga
    Sleep    0.5

Realizar negociação da figura Neymar 
    Do Login
    Search User           Legend
    Select Sticker        Neymar Jr
    Get In Touch
    Whatsapp Sticker Message    Neymar Jr
    Sleep                 02

Realizar negociação da figura Cr7
    Do Login
    Search User Aleatory two
    Select Sticker        Cristiano Ronaldo
    Get In Touch
    Whatsapp Sticker Message    Cristiano Ronaldo
    Sleep                 02

Realizar negociação da figura LM10
    Do Login
    Search User Aleatory two
    Select Sticker        Lionel Messi
    Get In Touch
    Whatsapp Sticker Message    Lionel Messi
    Sleep                 02
Realizar negociação da figura KM7
    Do Login
    Search User Aleatory two
    Select Sticker        Kylian Mbappé
    Get In Touch
    Whatsapp Sticker Message    Kylian Mbappé
    Sleep                 02

Realizar negociação da figura VN20
    Do Login
    Search User Aleatory two
    Select Sticker        Vinicius Jr
    Get In Touch
    Whatsapp Sticker Message    Vinicius jR
    Sleep                 02

Realizar negociação da figura DM10
    Do Login
    Search User Aleatory two
    Select Sticker        Diego Armando Maradona
    Get In Touch
    Whatsapp Sticker Message    Diego Armando Maradona
    Sleep                 02

Realizar negociação da figura RR01
    Do Login
    Search User Aleatory two
    Select Sticker        Rodolfo Rodrigues
    Get In Touch
    Whatsapp Sticker Message    Rodolfo Rodrigues
    Sleep                 02

Realizar negociação da figura Neymar Legends
    Do Login
    Search User           Legend
    Select Sticker        Neymar Jr
    Get In Touch
    Whatsapp Sticker Message    Neymar Jr
    Sleep                 02
