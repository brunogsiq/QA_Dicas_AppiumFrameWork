*** Settings ***
Documentation    Arquivo principal a ser utilizado pelo projeto
Library          Browser

Resource         pages/login.resource
Resource         pages/dash.resource


*** Keywords ***
Do Login
    Go to login Page
    Submit Credentials    papito@gmail.com    vaibrasil
    User Logged In

Star tests
    New Browser                   headless=False
    Log to Console    _P X F_

Finish tests
    Log To Console    Finishing---------------------------------------------------------- |Status|
    Take Screenshot