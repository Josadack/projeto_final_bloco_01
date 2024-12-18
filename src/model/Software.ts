import { colors } from "../util/Colors";
import { Produtos } from "./Produtos";

export class Software extends Produtos{

    //Atributos
    private _plataforma: string;  
    private _licenca: string;  


    //Metodo construtor
	constructor(id: number, nome: string, preco: string, tipo: number,plataforma: string, licenca: string) {
        super(id, nome, preco, tipo)
		this._plataforma = plataforma;
		this._licenca = licenca;
	}



    //Metodos Gett´s e Sett´s
	public get plataforma(): string {
		return this._plataforma;
	}

 
	public get licenca(): string {
		return this._licenca;
	}

  
	public set plataforma(value: string) {
		this._plataforma = value;
	}

 
	public set licenca(value: string) {
		this._licenca = value;
	}


    //Metodo visualizar Override
     public visualizar(): void {
            super.visualizar();
            console.log(colors.fg.gray,'-----------------------------',)
            console.log(colors.fg.magentastrong,` ID do produto: ${this._plataforma}`)
            console.log(` Preço do produto: ${this._licenca}`,colors.reset)
        }
}