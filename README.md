Rodando uma API Backend Localmente:

Preparação:
Certifique-se de ter o Node.js instalado no seu computador. Você pode baixá-lo em https://nodejs.org.

Clonando o Repositório:
Abra o terminal (ou Prompt de Comando no Windows) e navegue até o diretório onde você deseja salvar o projeto. Digite o seguinte comando para clonar o repositório:

git clone URL_DO_REPOSITORIO

Instalando Dependências:
No terminal, navegue para a pasta "back" do projeto. Execute o seguinte comando para instalar as dependências:

cd back
npm install

Configuração das Variáveis de Ambiente:
Crie um arquivo chamado .env na pasta da "back" e defina quaisquer variáveis de ambiente necessárias, como as configurações do banco de dados.Igual esta no arquivo .env.example

Iniciando a API:
No terminal, execute o seguinte comando para iniciar a API:

npm rum dev


No front End foi feito o deploy 

segue o link:

https://full-stack-project-swart.vercel.app/

era pra ter feito no backend Tambem mais tive alguns problemas


mas caso queira rodar o front localmente segue os passos 

Rodando uma Página Frontend Localmente:

como o front esta no mesmo ropositorio do back não e necessario clonar novamente 


Instalando Dependências:
No terminal, navegue para a pasta do projeto da página front. Execute o seguinte comando para instalar as dependências:

cd front
npm install

Configurando a Página Frontend:
Se necessário, configure quaisquer variáveis de ambiente ou configurações necessárias para a página frontend, como a URL da API.

Iniciando a Página Frontend:
No terminal, execute o seguinte comando para iniciar a página frontend:

npm rum dev
Agora, a página frontend está rodando localmente em seu computador e se comunicando com a API.


caso queira acessar a documentação da API é só acessar a url/doc
Ex: http://localhost:3000/doc

abaixo segue alguns exemplos de teste


# API de Criação de Clientes e Contatos

Essa é uma API desenvolvida por Lucas Macedo Ribeiro para adicionar clientes em um banco de dados e cadastrar seus contatos.

## Endpoints

### Cadastrar Cliente

**Método:** POST

**URL:** `http://localhost:3000/client`

Cadastra um novo cliente na API.

Exemplo de corpo da requisição:
```json
{
  "name": "Ana",
  "email": "ana@example.com",
  "telefone": "987654",
  "password": "p@ssw0rd",
  "admin": true
}


Atualizar Cliente
Método: PATCH

URL: http://localhost:3000/client/{clientId}

Atualiza as informações de um cliente existente na API.

Exemplo de corpo da requisição:

{
  "name": "Maria Silva",
  "email": "maria@example.com",
  "telefone": "555555",
  "password": "newpass"
}

Contato

Para mais informações, entre em contato pelo email: lukki12@gmail.com.