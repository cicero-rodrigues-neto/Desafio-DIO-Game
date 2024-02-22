class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi1 = new Heroi("Gandalf", 120, "mago");
heroi1.atacar();

let heroi2 = new Heroi("Conan", 35, "guerreiro");
heroi2.atacar();
