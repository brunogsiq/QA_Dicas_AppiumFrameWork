Feature: Consulta de tipos de estabelecimentos VR

  Background:
    Given que acesso a API VRPAT

  Scenario: Validar retorno da consulta
    Then a resposta da API contém a chave "typeOfEstablishment"
    And exibo aleatoriamente um tipo de estabelecimento
