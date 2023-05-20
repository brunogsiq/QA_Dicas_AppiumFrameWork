*** Settings ***
Documentation       Este é o gerenciador de dependências da sua automação

Library             SeleniumLibrary

## Keywords ##
Resource            ../auto/keywords/kws_home.robot

## Pages ##
Resource            ../auto/pages/home_page.robot

## Hooks ##

Resource    hooks.robot