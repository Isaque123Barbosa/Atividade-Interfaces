var Autor = /** @class */ (function () {
    function Autor(nome, idade, cpf, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.sexo = sexo;
    }
    Autor.prototype.exibirPessoa = function () {
        console.log("Informa\u00E7\u00F5es sobre a Pessoa");
        console.log("Nome: ".concat(this.nome));
        console.log("Idade: ".concat(this.idade));
        console.log("CPF: ".concat(this.cpf));
        console.log("Sexo: ".concat(this.sexo));
    };
    return Autor;
}());
var Editora = /** @class */ (function () {
    function Editora(nome, cnpj, telefone, email) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.email = email;
    }
    Editora.prototype.exibirEditora = function () {
        console.log("Informa\u00E7\u00F5es sobre a Editora");
        console.log("Nome da Editora: ".concat(this.nome));
        console.log("CNPJ: ".concat(this.cnpj));
        console.log("Telefone: ".concat(this.telefone));
        console.log("Email: ".concat(this.email));
    };
    return Editora;
}());
var LivroFisico = /** @class */ (function () {
    function LivroFisico(titulo, ano, isbn, preco, autor, editora, estoque) {
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
    }
    LivroFisico.prototype.exibirInformacoes = function () {
        console.log("Informa\u00E7\u00F5es sobre o Livro");
        console.log("Titulo: ".concat(this.titulo));
        console.log("Ano: ".concat(this.ano));
        console.log("ISBN: ".concat(this.isbn));
        console.log("Pre\u00E7o: ".concat(this.preco));
        console.log("Autor: ".concat(this.autor.nome));
        console.log("Editora: ".concat(this.editora.nome));
        console.log("Estoque: ".concat(this.estoque));
    };
    return LivroFisico;
}());
var EBook = /** @class */ (function () {
    function EBook(titulo, ano, isbn, preco, autor, editora, estoque, tamanho) {
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
        this.tamanho = tamanho;
    }
    EBook.prototype.exibirInformacoes = function () {
        console.log("Informa\u00E7\u00F5es sobre o E-Book");
        console.log("Titulo: ".concat(this.titulo));
        console.log("Ano: ".concat(this.ano));
        console.log("ISBN: ".concat(this.isbn));
        console.log("Pre\u00E7o: ".concat(this.preco));
        console.log("Autor: ".concat(this.autor.nome));
        console.log("Editora: ".concat(this.editora.nome));
        console.log("Estoque: ".concat(this.estoque));
        console.log("Tamanho: ".concat(this.tamanho));
    };
    return EBook;
}());
var Livraria = /** @class */ (function () {
    function Livraria(nome) {
        this.nome = nome;
        this.livrosFisicos = [];
        this.ebooks = [];
    }
    Livraria.prototype.listarLivrosFisicos = function () {
        console.log("\n--- Lista de Livros F\u00EDsicos da \"".concat(this.nome, "\" ---"));
        if (this.livrosFisicos.length === 0) {
            console.log("Nenhum livro físico no acervo.");
            return;
        }
        this.livrosFisicos.forEach(function (livro) {
            livro.exibirInformacoes();
            console.log();
        });
    };
    Livraria.prototype.listarEBooks = function () {
        console.log("\n--- Lista de E-Books da \"".concat(this.nome, "\" ---"));
        if (this.ebooks.length === 0) {
            console.log("Nenhum e-book no acervo.");
            return;
        }
        this.ebooks.forEach(function (ebook) {
            ebook.exibirInformacoes();
            console.log();
        });
    };
    Livraria.prototype.adicionarLivroFisico = function (titulo, ano, isbn, preco, autor, editora, estoque) {
        var livro = new LivroFisico(titulo, ano, isbn, preco, autor, editora, estoque);
        this.livrosFisicos.push(livro);
    };
    Livraria.prototype.adicionarEBook = function (titulo, ano, isbn, preco, autor, editora, estoque, tamanho) {
        var livro = new EBook(titulo, ano, isbn, preco, autor, editora, estoque, tamanho);
        this.ebooks.push(livro);
    };
    Livraria.prototype.venderLivroFisico = function (isbn) {
        for (var i = 0; i < this.livrosFisicos.length; i++) {
            if (this.livrosFisicos[i].estoque > 0) {
                if (this.livrosFisicos[i].isbn == isbn) {
                    this.livrosFisicos[i].estoque -= 1;
                    console.log("O livro ".concat(this.livrosFisicos[i].titulo, " foi vendido!"));
                }
            }
        }
    };
    Livraria.prototype.venderEBook = function (isbn) {
        for (var i = 0; i < this.ebooks.length; i++) {
            if (this.ebooks[i].estoque > 0) {
                if (this.ebooks[i].isbn == isbn) {
                    this.ebooks[i].estoque -= 1;
                    console.log("O e-book ".concat(this.ebooks[i].titulo, " foi vendido!"));
                }
            }
        }
    };
    Livraria.prototype.excluirLivroFisico = function (isbn) {
        for (var i = 0; i < this.livrosFisicos.length; i++) {
            if (this.livrosFisicos[i].isbn == isbn) {
                console.log("O livro ".concat(this.livrosFisicos[i].titulo, " foi exclu\u00EDdo."));
                this.livrosFisicos.splice(i, 1);
                break;
            }
        }
    };
    Livraria.prototype.excluirEBook = function (isbn) {
        for (var i = 0; i < this.ebooks.length; i++) {
            if (this.ebooks[i].isbn == isbn) {
                console.log("O e-book ".concat(this.ebooks[i].titulo, " foi exclu\u00EDdo."));
                this.ebooks.splice(i, 1);
                break;
            }
        }
    };
    return Livraria;
}());
var companhiaDasLetras = new Editora("Companhia das Letras", "55.789.390/0001-12", "(82)99988-7766", "companhiadasletras@gmail.com");
var editorarocco = new Editora("Editora Rocco", "42.444.703/0001-59", "(82)99988-9977", "editorarocco@gmail.com");
var jkrowling = new Autor("J. K. Rowling", 89, "875.789.234-90", "Masculino");
var davidgoggins = new Autor("David Goggins", 50, "123.456.789-01", "Masculino");
var isaquebarbosa = new Autor("Isaque Barbosa Alves", 33, "032.432.423-54", "Masculino");
var livraria1 = new Livraria("Livraria da Esquina");
livraria1.adicionarLivroFisico("Harry Potter", 2001, "234234234-123", 39.90, jkrowling, companhiaDasLetras, 5);
livraria1.listarLivrosFisicos();
livraria1.adicionarLivroFisico("A história da matemática", 2040, "2384938243-234", 2.99, isaquebarbosa, companhiaDasLetras, 3);
livraria1.adicionarLivroFisico("A história da matemática 2", 2040, "2384938243-224", 2.99, isaquebarbosa, companhiaDasLetras, 3);
livraria1.adicionarEBook("Nada pode me ferir", 2018, "456456456-456", 10.90, davidgoggins, editorarocco, 2, 256);
livraria1.listarLivrosFisicos();
livraria1.listarEBooks();
livraria1.venderLivroFisico("234234234-123");
livraria1.listarLivrosFisicos();
livraria1.excluirLivroFisico("2384938243-224");
livraria1.listarLivrosFisicos();
