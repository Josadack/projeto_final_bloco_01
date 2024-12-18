import { colors } from "../util/Colors";

export abstract class Produtos{

    //Atributos
   private _id:number;
   private _nome:string;
   private _preco:string;
   private _tipo:number;


   //Metodo Cosntrutor
	constructor(id: number, nome: string, preco: string, tipo: number) {
		this._id = id;
		this._nome = nome;
		this._preco = preco;
		this._tipo = tipo;
	}

    //Metodos Gett´s e Sett´s
	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get preco(): string {
		return this._preco;
	}

 
	public get tipo(): number {
		return this._tipo;
	}

	public set id(value: number) {
		this._id = value;
	}

   
	public set nome(value: string) {
		this._nome = value;
	}


	public set preco(value: string) {
		this._preco = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

    //Metodos Visualizar
    public visualizar(){
        let tipo:string;
        switch(this._tipo){
            case 1:
                tipo = "Eletronico"
                break;
            case 2:
                tipo = "Software"
                break;
                default:
                tipo = "Tipo Inválido"
        }
        console.log(colors.fg.gray,'\n**********************')
        console.log(' INFORMAÇÃO DO PRODUTO ')
        console.log('**********************')
        console.log(colors.fg.green,` ID do produto: ${this._id}`)
        console.log(` Nome do produto: ${this._nome}`)
        console.log(` Preço do produto: ${this._preco}`)
        console.log(` Tipo do produto: ${tipo}`,colors.reset)

    }
}