require 'rspec'
require 'httparty'
require 'json'

# Configurações gerais do RSpec
RSpec.configure do |config|
  config.color = true
  config.formatter = :documentation
end

# Configurações gerais do HTTParty
HTTParty.base_uri 'https://portal.vr.com.br/api-web'

# Helper para converter a resposta do HTTParty para um hash
def parsed_response
  JSON.parse(@response.body)
end
