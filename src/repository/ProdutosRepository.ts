import { Produtos } from "../model/Produtos";

export interface ProdutosRepository{

    //CRUD do produto
    listarTodosProdutos():void;
    listarProdutoPorId(id: number):void;
    cadastrarProduto(produto: Produtos):void;
    atualizarProduto(produto: Produtos):void;
    deletarProduto(id: number):void;
}