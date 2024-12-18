import { Produtos } from "../model/Produtos";
import { ProdutosRepository } from "../repository/ProdutosRepository";
import { colors } from "../util/Colors";

export class ProdutosController implements ProdutosRepository{

    //Collection para armazenar os produtos
    private listaProdutos = new Array<Produtos>();

    public id: number = 0;


    listarTodosProdutos(): void {
        this.listaProdutos.forEach(produto => produto.visualizar() )
    }

    listarProdutoPorId(id: number): void {
      const buscarProduto = this.buscarNoArray(id);

      if(buscarProduto !== null){
        buscarProduto.visualizar();
        
      }else{
            console.log(colors.fg.red,"\nProduto não encontrada", colors.reset)
        }
     
    }

    cadastrarProduto(produto: Produtos): void {
        this.listaProdutos.push(produto);
        console.log(colors.fg.greenstrong,`Produto ${colors.fg.redstrong}${produto.nome}${colors.reset, colors.fg.greenstrong} cadastro com sucesso! `,colors.reset)
    }


    atualizarProduto(produto: Produtos): void {
        const buscaProduto = this.buscarNoArray(produto.id);

        if(buscaProduto !== null){
             this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
             console.log(colors.fg.greenstrong,`Produto foi Atulizado para ${colors.fg.redstrong}${produto.nome}${colors.reset, colors.fg.greenstrong} com sucesso!`, colors.reset);
         
        }else{
         console.log("\nProduto não encontrada")
        }
    }

    deletarProduto(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if(buscaProduto !== null){
             this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1)
             console.log(colors.bg.black, colors.fg.yellow,`Produto ID ${id} foi DELETADO com sucesso!`,colors.reset);
           
         
        }else{
         console.log("\nProduto não encontrada ")
        }
    }

    procurarPorNome(nome: string): void {
          //filtragem de dados
          let buscaPorNome = this.listaProdutos.filter(pd => 
            pd.nome.toUpperCase().includes(nome.toUpperCase())
         )
  
         //Listagem  dos dados
         if (buscaPorNome.length > 0) {  
            buscaPorNome.forEach(pd => {  
                pd.visualizar(); // Chama o método visualizar para cada produto encontrado  
            });  
        } else {  
            console.log(colors.fg.redstrong,"Produto Não encontrado",colors.reset); // Mensagem se nenhum produto foi encontrado  
        } 
    }



    //Metodos Auxiliares

    //Método para gerar os ID
    public gerarId():number{
        return ++ this.id;
        }

        
    public buscarNoArray(id: number):  Produtos | null{
            for(let produto of this.listaProdutos){
                if(produto.id === id)
                    return produto;
            }
            return null;
    
        }
       
}