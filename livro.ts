interface ILivro{
    titulo: string,
    ano: number,
    isbn: string,
    preco: number,
    autor: Autor,
    editora: Editora,
    estoque: number,

    exibirInformacoes(): void,
    atualizarEstoque(decisao: number): void
}

interface IPessoa{
    nome: string;
    idade: number;
    cpf: string;
    sexo: string;

    exibirPessoa(): void;
}

interface IEditora{
    nome: string;
    cnpj: string;
    telefone: string;
    email: string;

    exibirEditora(): void;
}

interface IEstabelecimento{
    nome: string,
    
}

class Autor implements IPessoa{
    nome: string;
    idade: number;
    cpf: string;
    sexo: string;

    constructor(nome: string, idade: number, cpf: string, sexo: string){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.sexo = sexo;
    }

    exibirPessoa(): void {
        console.log(`Informações sobre a Pessoa`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Sexo: ${this.sexo}`);
    }
}

class Editora implements IEditora{
    nome: string;
    cnpj: string;
    telefone: string;
    email: string;

    constructor(nome: string, cnpj: string, telefone: string, email: string){
        this.nome = nome;
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.email = email;
    }

    exibirEditora(): void {
        console.log(`Informações sobre a Editora`);
        console.log(`Nome da Editora: ${this.nome}`);
        console.log(`CNPJ: ${this.cnpj}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Email: ${this.email}`);
    }
}

class LivroFisico implements ILivro{
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: Autor;
    editora: Editora;
    estoque: number;

    constructor(titulo: string, ano: number, isbn: string, preco: number, autor: Autor, editora: Editora, estoque: number){
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
    }

    exibirInformacoes(): void {
        console.log(`Informações sobre o Livro`);
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Autor: ${this.autor.nome}`);
        console.log(`Editora: ${this.editora.nome}`);
        console.log(`Estoque: ${this.estoque}`);
    }
    atualizarEstoque(decisao: number): void {
        
    }
}

class EBook implements ILivro{
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: Autor;
    editora: Editora;
    estoque: number;
    private tamanho: number;

    constructor(titulo: string, ano: number, isbn: string, preco: number, autor: Autor, editora: Editora, estoque: number, tamanho: number){
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
        this.tamanho = tamanho;
    }

    exibirInformacoes(): void {
        console.log(`Informações sobre o E-Book`);
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Autor: ${this.autor.nome}`);
        console.log(`Editora: ${this.editora.nome}`);
        console.log(`Estoque: ${this.estoque}`);
        console.log(`Tamanho: ${this.tamanho}`)
    }
    atualizarEstoque(decisao: number): void {
        
    }
}
