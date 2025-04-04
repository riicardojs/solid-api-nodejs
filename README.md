# Solid APP

WellHub style app

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possivel se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de checkins realizados pelo usúario logado;
- [x] Deve ser possível o usuário obter seu histórico de checkins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possivel o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar checkin em uma academia;
- [ ] Deve ser possível validar o checkin de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Requisitos de negócio)

- [x] O usuário naõ deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 checkins no mesmo dia;
- [x] O usuário não pode fazer checkins se não estiver perto (100m) da academia;
- [ ] O checkin só pode ser validado até 20 minutos após criado;
- [ ] O checkin só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrado por administradores;

## RNFs (Requisitos não funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
