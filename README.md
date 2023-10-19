# serverless

## Objetivo
Repositório destinado à criação de uma aplicação Node para AWS Lambda. 
Consulta, cadastro, exclusão e atualização de Funcionários ( Employee). 

A idéia inicial era usar algum framework como express, koa ou nest. Porém, para simplificar e reduzir
a quantidade de dependências (consequentemente o tamanho da aplicação e também o tempo de carregamento na lambda) 
foi utilizado  [lambda-api](https://github.com/jeremydaly/lambda-api) 
(para não ter que tratar event e context da lambda manualmente, facilitando as rotas) .

Para simplificar o acesso à lambda, ao invés de configurar um Api Gateway, foi utilizado uma **lambda function url**

## Como testar o endpoint
Basta utilizar curl ou alguma ferramenta como Insomnia ou Postman

Lambda URL: https://5k3up5kt53wiszk2ifrqrbesvm0ymgeu.lambda-url.us-east-1.on.aws/<br>

Métodos
| Método        | URL                | Descrição                     |
| ------------- | -------------      | -----------                   |
| GET           | /employee          | Lista funcionários            |
| GET           | /employee/:id      | Consulta funcionário          |
| POST          | /employee          | Cria um funcionário           |
| DELETE        | /employee/:id      | Excluir um funcionário        |
| PATCH         | /employee/:id      | Atualiza um funcionário       |


### Melhorias 

- [ ] Refatorar para clean architecture
- [ ] Adicionar testes unitários
- [ ] Adicionar Lint e Husky
- [ ] Adicionar módulos terraform para criação dos recursos (vpc, sg, rds, lambda...)
- [ ] Melhorar tratamento de erros e validação de dados usando Zod
