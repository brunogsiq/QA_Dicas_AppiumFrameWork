# features/step_definitions/consulta_steps.rb

require 'httparty'

Given('que acesso a API VRPAT') do
  @response = HTTParty.get('https://portal.vr.com.br/api-web/comum/enumerations/VRPAT')
end

Then('a resposta da API contém a chave {string}') do |key|
  expect(@response.parsed_response).to have_key(key)
end

Then('exibo aleatoriamente um tipo de estabelecimento') do
  if @response.success?
    types_of_establishment = @response.parsed_response['typeOfEstablishment']
    random_type = types_of_establishment.sample
    puts random_type
    File.open('consulta.log', 'a') { |file| file.puts "#{Time.now} - Tipo de estabelecimento: #{random_type}" }
  else
    puts 'Erro na resposta da API'
  end
end
