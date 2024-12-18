import { colors } from "../util/Colors";
import { Produtos } from "./Produtos";

export class Eletronicos extends Produtos{

    private _marca:string;  
    private _modelo: string;  
    private _capacidade: number; 


	constructor( id: number, nome: string, preco: number, tipo: number, marca: string, modelo: string, capacidade: number) {
        super(id, nome, preco, tipo);
		this._marca = marca;
		this._modelo = modelo;
		this._capacidade = capacidade;
	}

	public get marca(): string {
		return this._marca;
	}

  
	public get modelo(): string {
		return this._modelo;
	}

	public get capacidade(): number {
		return this._capacidade;
	}

  
	public set marca(value: string) {
		this._marca = value;
	}

	public set modelo(value: string) {
		this._modelo = value;
	}


	public set capacidade(value: number) {
		this._capacidade = value;
	}

    
    //Metodo visualizar Override
    public visualizar(): void {
        super.visualizar();
        console.log(colors.fg.gray,'-----------------------------',)
        console.log(colors.fg.greenstrong,` Marca do Produto: ${this._marca}`)
        console.log(` Nome do produto: ${this._modelo}`)
        console.log(` Preço do produto: ${this._capacidade}`,colors.reset)
    }

}