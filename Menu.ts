import readlinesync = require('readline-sync');
import { colors } from './src/util/Colors';
import { ProdutosController } from './src/controller/ProdutosController';
import { Eletronicos } from './src/model/Eletronicos';
import { Software } from './src/model/Software';


export function main(){

let opcao, id, preco, tipo, capacidade: number;
let nome, marca, modelo, plataforma, licenca :string;

const tipoProduto = ['Eletrônico' ,'Software']

//instanciando Meu controller
const produtos = new ProdutosController();

   produtos.cadastrarProduto( new Eletronicos(produtos.gerarId(), "Smartphone", 1000, 1,"Apple", "iPhone 13", 128));  
   produtos.cadastrarProduto( new Software(produtos.gerarId(), "Adobe Photoshop", 200, 2, "Windows", "Licença Permanente"));
   produtos.cadastrarProduto( new Eletronicos(produtos.gerarId(), "Notebook", 2500, 1, "Dell", "Inspiron 15", 512));  
   produtos.cadastrarProduto( new Software(produtos.gerarId(), "Norton Antivirus", 50, 2, "Windows", "Licença Anual"));  
   produtos.cadastrarProduto( new Eletronicos(produtos.gerarId(), "Tablet", 800, 1, "Samsung", "Galaxy Tab S8", 256));  
   produtos.cadastrarProduto( new Software(produtos.gerarId(), "Adobe Premiere Pro", 300, 2, "MacOS", "Licença Permanente"));  
   produtos.cadastrarProduto( new Eletronicos(produtos.gerarId(), "Smartwatch", 500, 1, "Fitbit", "Charge 5", 4));  
   produtos.cadastrarProduto( new  Software(produtos.gerarId(), "Microsoft Office", 400, 2, "Windows", "Licença Permanente"));


while(true){
    console.log(colors.fg.red,
        "\n**************************************************")
    console.log("                                     ")                             
    console.log(colors.fg.cyanstrong,
            "              Tech Zone               ")
    console.log(colors.fg.red,
            "                                    ")
    console.log("************************************************")
    console.log("                                     ")
    console.log("         1 - Listar todos os Produtos             ")
    console.log("         2 - Listar Produto pelo ID            ")
    console.log("         3 - Cadastrar Produto          ")
    console.log("         4 - Atulizar produto            ")
    console.log("         5 - Deletar Produto                       ")
    console.log("         6 - Buscar por nome do Produto                              ")
    console.log("         0 - Sair                               ")
    console.log(colors.reset,colors.fg.yellowstrong,"\nEntre com a opção desejada: ",colors.fg.red)
    opcao = readlinesync.questionInt("") 

    if(opcao === 0){
        console.log(colors.fg.cyanstrong,`\n_Tecnologia a seu alcance_`, colors.reset)
        about();
        process.exit();
    }

    console.log(colors.fg.cyanstrong,)
    switch(opcao){
        
        case 1:
            console.log("\nListar todos os Produtos");
            produtos.listarTodosProdutos()
            keyPress();
            break;

        case 2:
            console.log("\n\nListar Produto pelo ID\n\n");

            console.log('Digite o ID do Produto: ')
            id = readlinesync.questionInt('')

            produtos.listarProdutoPorId(id);

            keyPress();
            break;

        case 3:
            console.log("\n\nCadastrar Produto\n\n");

            console.log("\nDigite o nome do Produto")
                nome = readlinesync.question('');

                console.log("Digite o preço do Produto")
                preco = readlinesync.questionInt('R$ ');

                console.log("Escolha o tipo do Produto")
                tipo = readlinesync.keyInSelect(tipoProduto,"", {cancel: false}) + 1;

                switch(tipo){
                    case 1: 
                      console.log("Marca: ")
                      marca = readlinesync.question('');

                      console.log("Modelo: ")
                      modelo = readlinesync.question('');

                      console.log("Capacidade: ")
                      capacidade = readlinesync.questionInt('',);

                      produtos.cadastrarProduto(new Eletronicos(produtos.gerarId(),nome, preco, tipo, marca, modelo, capacidade))
                        break;

                    case 2: 
                      console.log("Plataforma ")
                      plataforma = readlinesync.question('');

                      console.log("Licença do Software")
                      licenca = readlinesync.question('');

                      produtos.cadastrarProduto(new Software(produtos.gerarId(),nome, preco, tipo, plataforma, licenca ))
                        break;
                }
            keyPress();
            break;
        case 4:
            console.log("\n\nAtualizar Produto\n\n");

            console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt('');

                let produto = produtos.buscarNoArray(id);
                
                if(produto !== null){

                    console.log(`${colors.fg.whitestrong}Editar o produto ${colors.fg.red}${produto?.nome} ${colors.reset}`)
                    console.log("\nAtualizar Nome do Produto")
                    nome = readlinesync.question('');

                    console.log("Atualiza preço do Produto")
                    preco = readlinesync.questionFloat('R$');

                    tipo = produto.tipo;
                    switch(tipo){
                        case 1: 
                        console.log(" Atualizar Marca do Produto: ")
                        marca = readlinesync.question('');
  
                        console.log("Atualizar Modelo do Produto: ")
                        modelo = readlinesync.question('');
  
                        console.log("Atualizar Capacidade do Produto: ")
                        capacidade = readlinesync.questionInt('',);
  
                        produtos.atualizarProduto(new Eletronicos(id,nome, preco, tipo, marca, modelo, capacidade))
                          break;
  
                      case 2: 
                        console.log("Atulizar Plataforma software")
                        plataforma = readlinesync.question('');
  
                        console.log("Atualizar Licença do Software")
                        licenca = readlinesync.question('');
  
                        produtos.atualizarProduto(new Software( id,nome, preco, tipo, plataforma, licenca ))
                          break;
                    }
                }

            keyPress();
            break;

        case 5:
            console.log("\nDeletar Produto\n\n");
            
            console.log("Digite o ID do Produto: ");
            id = readlinesync.questionInt('');
            

            produtos.deletarProduto(id) 
           

            keyPress();
            break;

            case 6:
                console.log("\n\nBuscar por nome");
            
            console.log("\nDigite o nome do Produto:");
            nome = readlinesync.question('')

            produtos.procurarPorNome(nome);

            keyPress();
            break;

            default:
                console.log(`${colors.fg.red}\n*ERRO*${colors.reset}${colors.fg.whitestrong} Opção inválida${colors.reset}`)
    }

    }
}


/* Função com os dados da pessoa desenvolvedora */
export function about(): void{

    console.log(colors.fg.gray,"************************************************")
    console.log(" Desenvolvido por: ")
    console.log(colors.fg.red,"Josadaque Ferreira ")
    console.log(colors.fg.gray,"github.com/josadack ")
    console.log("************************************************",colors.reset)
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();

