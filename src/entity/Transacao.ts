import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Transacao {

    constructor(titulo: string, valor: number, tipo:"entrada" | "saida") {
        this.titulo = titulo;
        this.valor = valor;
        this.tipo = tipo;
    }

    @PrimaryGeneratedColumn()
    id_transacao: number;

    @Column()
    titulo: string;

    @Column()
    valor: number;

    @Column()
    tipo: "entrada" | "saida";
}
