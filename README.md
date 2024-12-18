🛒 Sistema de Gerenciamento de Produtos
Um sistema simples em Node.js e TypeScript que implementa CRUD (Create, Read, Update, Delete) de produtos, incluindo subclasses como eletrônicos e software.

📋 Funcionalidades
Listar Produtos
Listar todos os produtos ou buscar por ID ou nome.
Cadastrar Produto
Adicionar produtos eletrônicos ou de software ao sistema.
Atualizar Produto
Editar as informações de um produto específico.
Deletar Produto
Remover um produto cadastrado no sistema.
Pesquisar Produto
Buscar produtos por ID ou Nome.
🛠️ Tecnologias Utilizadas
Node.js
TypeScript
Realine-sync (para entrada de dados no terminal)
🗂️ Estrutura do Projeto
plaintext
Copiar código
src/
│-- controller/
│   └── ProdutosController.ts      # Lógica principal do CRUD
│
│-- model/
│   ├── Produtos.ts                # Classe base Produtos
│   ├── Eletronicos.ts             # Subclasse para produtos eletrônicos
│   └── Software.ts                # Subclasse para software
│
│-- repository/
│   └── ProdutosRepository.ts      # Interface para o repositório de produtos
│
│-- util/
│   └── Colors.ts                  # Configuração de cores no terminal
│
├── main.ts                        # Menu principal e execução
└── README.md                      # Documentação do projeto
🚀 Como Executar o Projeto
Pré-requisitos
Node.js e npm instalados na máquina.
Passos
Clone o repositório:

bash
Copiar código
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
Instale as dependências:

bash
Copiar código
npm install
Compile o TypeScript (opcional, se configurado):

bash
Copiar código
tsc
Execute o projeto:

bash
Copiar código
node dist/main.js
📦 Interface CRUD do Repositório
A interface ProdutosRepository contém os métodos principais:

typescript
Copiar código
listarTodosProdutos(): void;
listarProdutoPorId(id: number): void;
cadastrarProduto(produto: Produtos): void;
atualizarProduto(produto: Produtos): void;
deletarProduto(id: number): void;
procurarPorNome(nome: string): void;
🧩 Classes e Subclasses
1. Classe Base: Produtos
Define as propriedades comuns a todos os produtos:

id, nome, preco e tipo.
2. Subclasse: Eletronicos
Extende Produtos e adiciona as propriedades:

marca, modelo e capacidade.
3. Subclasse: Software
Extende Produtos e adiciona as propriedades:

plataforma e licenca.
🎨 Personalização
Para facilitar o uso no terminal, o projeto utiliza o módulo colors para estilizar a saída do console.

📝 Licença
Este projeto é distribuído sob a licença MIT.

Desenvolvido por: Josadaque

