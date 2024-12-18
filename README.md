# 🛒 Sistema de Gerenciamento de Produtos

Um sistema simples em **Node.js** e **TypeScript** que implementa CRUD (Create, Read, Update, Delete) de produtos, incluindo subclasses como eletrônicos e software.

---

## 📋 Funcionalidades

1. **Listar Produtos**  
   Listar todos os produtos ou buscar por **ID** ou **nome**.

2. **Cadastrar Produto**  
   Adicionar produtos eletrônicos ou de software ao sistema.

3. **Atualizar Produto**  
   Editar as informações de um produto específico.

4. **Deletar Produto**  
   Remover um produto cadastrado no sistema.

5. **Pesquisar Produto**  
   Buscar produtos por **ID** ou **Nome**.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Readline-sync** (para entrada de dados no terminal)

---

## 🗂️ Estrutura do Projeto

```plaintext
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


