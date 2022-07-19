# API DE ESTUDO DO ORM SEQUELIZE

Está api/back-end foi implementada como solução de implementação prática dos meus estudos ao ORM [Sequelize](https://sequelize.org/), pois eu estava realizando um estudo de viabilidade para o uso de um orm puramente em Javascript, o sequelize foi um destes, assim aqui disponho um back-end implementado durante o meu estudo do mesmo, e o estudo foca na implementação mais inicial de uma api, onde a mesma contem professores (*teachers*), cursos (*courses*) e usuários (*users*), onde até o momento pode-se criar um professor e listar todos, criar cursos (com a observação que um curso tem relacionamento com professor, pois pelo domínio, todo curso tem um professor), bem como listar todos os cursos e listar todos os cursos com a associação de cada curso ao seu respectivo professor, onde dentro da aplicaçãoe existem usuários comuns e usuários administradores, onde os comuns podem executar somente as funções de listagem, como listar cursos e professores, e os administradores, além de poder executar as listagens podem também executar as criações, tanto de professor quanto de curso, sendo assim uma funcionalidade restrita para o usuário adminstrador.

# Tecnologias e Boas práticas utilizadas
* NodeJs
* Javascript
* ExpressJs
* Celebrate
* Sequelize
* JWT
* Swagger
* BcryptJs
* PostgreSQL
* Docker
* docker-compose

## CASO QUEIRA SABER MAIS SOBRE O PROJETO

Pode entrar em contato comigo pelo seguinte email: ericdesenvolvedor7@gmail.com