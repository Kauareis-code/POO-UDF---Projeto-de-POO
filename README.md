# POO-UDF---Projeto-SPPN
Sistema web desenvolvido com Django. Atualmente, o projeto oferece funcionalidades básicas de **login** e **cadastro de usuários**.

<br>

## 🚀 Funcionalidades Implementadas

- Cadastro de novo usuário
- Login com autenticação
<br>

## 📦 Tecnologias Utilizadas

- [Python 3.x](https://www.python.org/)
- [Django 4.x](https://www.djangoproject.com/)
- SQLite (banco de dados padrão para desenvolvimento)
<br>

## ⚙️ Configurações iniciais para rodar o servidor

1. Crie e ative um ambiente virtual:
   
   ```bash
      python -m venv venv
      source venv/bin/activate  # Linux/macOS
      venv\Scripts\activate     # Windows
      py -m pip install Django

2. Execute as migrações:

   ```bash
       python manage.py migrate

3. Inicie o servidor:

   ```bash
       python manage.py runserver
<br>

# Explicação do Sistema
O projeto Spn é uma aplicação web desenvolvida com o framework Django, cujo objetivo inicial é fornecer um sistema de autenticação de usuários, composto por funcionalidades básicas de cadastro, login e logout.
<br>
<br>

## 🔐 Sistema de Autenticação
O sistema utiliza o modelo de autenticação nativo do Django, garantindo segurança e padronização. As principais funcionalidades implementadas são:

Cadastro de Usuário:
Um formulário permite ao visitante criar uma conta, informando dados como nome de usuário, e-mail e senha. A senha é armazenada de forma segura no banco de dados (com hash).

Login:
Usuários registrados podem se autenticar utilizando nome de usuário e senha. Após o login, o sistema cria uma sessão válida e redireciona o usuário para uma página protegida.

Logout:
A sessão do usuário é encerrada de forma segura com a funcionalidade de logout, redirecionando-o para a página inicial ou de login.
<br>
<br>

## 📁 Organização do Projeto
O sistema é dividido em dois apps principais:

myapp/
Contém as configurações globais do projeto (configuração de URLs, banco de dados, autenticação, etc).

accounts/
App responsável pelo gerenciamento de usuários. Inclui:

Formulários personalizados de cadastro e login

Views com lógica de autenticação

Templates HTML para as páginas de login e cadastro
<br>
<br>

## 💾 Banco de Dados
Nesta fase, o sistema utiliza SQLite como banco de dados padrão do Django. Isso facilita o desenvolvimento e testes locais. Os dados dos usuários (nome, email, senha, etc) são armazenados em uma tabela gerenciada automaticamente pelo modelo User do Django.
