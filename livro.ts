interface ILivro{
    titulo: string,
    ano: number,
    isbn: string,
    preco: number,
    autor: Autor,
    editora: Editora,
    estoque: number,

    exibirInformacoes(): void,
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
}

class Livraria{
    livrosFisicos: LivroFisico[];
    ebooks: EBook[];
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    listarLivrosFisicos(){
        console.log(`Lista de livros físicos:`)
        for(let i=0; i<this.livrosFisicos.length; i++){
            console.log(`${this.livrosFisicos[i].exibirInformacoes}\n\n`)
        }
    }

    listarEBooks(){
        console.log(`Lista de e-books:`)
        for(let i=0; i<this.ebooks.length; i++){
            console.log(`${this.ebooks[i].exibirInformacoes}\n\n`)
        }
    }

    adicionarLivroFisico(titulo: string, ano: number, isbn: string, preco: number, autor: Autor, editora: Editora, estoque: number): void{
        this.livrosFisicos.push(new LivroFisico(titulo, ano, isbn, preco, autor, editora, estoque));
    }
    adicionarEBook(titulo: string, ano: number, isbn: string, preco: number, autor: Autor, editora: Editora, estoque: number, tamanho: number): void{
        this.ebooks.push(new EBook(titulo, ano, isbn, preco, autor, editora, estoque, tamanho))
    }
    venderLivroFisico(nomeLivro: string): void{
        for(let i = 0; i<this.livrosFisicos.length; i++){
            if(this.livrosFisicos[i].estoque > 0){
                if(this.livrosFisicos[i].titulo.toLowerCase() == nomeLivro.toLowerCase()){
                    this.livrosFisicos[i].estoque -= 1;
                    console.log(`O livro ${this.livrosFisicos[i].titulo} foi vendido!`);
                }
            }
        }
    }
    venderEBook(nomeLivro: string): void{
        for(let i = 0; i<this.ebooks.length; i++){
            if(this.ebooks[i].estoque > 0){
                if(this.ebooks[i].titulo.toLowerCase() == nomeLivro.toLowerCase()){
                    this.ebooks[i].estoque -= 1;
                    console.log(`O e-book ${this.ebooks[i].titulo} foi vendido!`);
                }
            }
        }
    }
    excluirLivroFisico(nomeLivro: string): void{
        for(let i = 0; i<this.livrosFisicos.length; i++){
            if(this.livrosFisicos[i].titulo.toLowerCase() == nomeLivro.toLowerCase()){
                this.livrosFisicos.splice(i,1);
                console.log(`O livro ${this.livrosFisicos[i].titulo} foi excluído.`)
            }
        }
    }
    excluirEBook(nomeLivro: string): void{
        for(let i = 0; i<this.ebooks.length; i++){
            if(this.ebooks[i].titulo.toLowerCase() == nomeLivro.toLowerCase()){
                this.ebooks.splice(i,1);
                console.log(`O e-book ${this.ebooks[i].titulo} foi excluído.`)
            }
        }
    }
}

let companhiaDasLetras = new Editora("Companhia das Letras", "55.789.390/0001-12", "(82)99988-7766", "companhiadasletras@gmail.com");
let editorarocco = new Editora("Editora Rocco", "42.444.703/0001-59", "(82)99988-9977","editorarocco@gmail.com");
let jkrowling = new Autor("J. K. Rowling", 89, "875.789.234-90", "Masculino");
let davidgoggins = new Autor("David Goggins", 50, "123.456.789-01", "Masculino");
let isaquebarbosa = new Autor("Isaque Barbosa Alves", 33, "032.432.423-54", "Masculino")
let harrypotter = new LivroFisico("Harry Potter", 2001, "234234234-123", 39.90, jkrowling, companhiaDasLetras, 5);
let livroIsaque = new LivroFisico("A história da matemática", 2040, "2384938243-234", 2.99, isaquebarbosa, companhiaDasLetras, 3);
let nadapodemeferir = new EBook("Nada pode me ferir",2018, "456456456-456", 10.90, davidgoggins, editorarocco, 2, 256);
let livraria1 = new Livraria("Livraria da Esquina");

livraria1.adicionarLivroFisico("Harry Potter", 2001, "234234234-123", 39.90, jkrowling, companhiaDasLetras, 5);
livraria1.listarLivrosFisicos();
livraria1.adicionarLivroFisico("A história da matemática", 2040, "2384938243-234", 2.99, isaquebarbosa, companhiaDasLetras, 3);
livraria1.adicionarLivroFisico("A história da matemática 2", 2040, "2384938243-224", 2.99, isaquebarbosa, companhiaDasLetras, 3)
livraria1.adicionarEBook("Nada pode me ferir",2018, "456456456-456", 10.90, davidgoggins, editorarocco, 2, 256);
livraria1.listarLivrosFisicos();
livraria1.listarEBooks();
livraria1.venderLivroFisico("Harry Potter");
livraria1.listarLivrosFisicos();
livraria1.excluirLivroFisico("A história da matemática 2");
livraria1.listarLivrosFisicos();
