*** Settings ***
Documentation       Este é o arquivo de configuração do roboot

Resource            package.robot


*** Keywords ***
Test Setup      Log to Console    _P X F_

Test Teardown   Log To Console    Finishing----------------------------------------------------------- |Status|