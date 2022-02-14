import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Contato {

    constructor(nome: string, email: string, mensagem:string) {
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    mensagem: string;
}
