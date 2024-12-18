import readlinesync = require('readline-sync');
import { colors } from './src/util/Colors';

export function main(){

let opcao: number

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
            keyPress();
            break;

        case 2:
            console.log("\n\nListar Produto pelo ID\n\n");

            keyPress();
            break;

        case 3:
            console.log("\n\nCadastrar Produto\n\n");

            keyPress();
            break;
        case 4:
            console.log("\n\nAtualizar Produto\n\n");

            keyPress();
            break;

        case 5:
            console.log("\nDeletar Produto\n\n");

            keyPress();
            break;
            default:
                console.log(`${colors.fg.red}\n*ERRO*${colors.reset}${colors.fg.whitestrong} Opção inválida${colors.reset}`)
    }


}




/* Função com os dados da pessoa desenvolvedora */
}export function about(): void{

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

