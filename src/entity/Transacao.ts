import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Transacao {

    constructor(titulo: string, valor: number, tipo:"entrada" | "saida", categoria: string, date:string) {
        this.titulo = titulo;
        this.valor = valor;
        this.tipo = tipo;
        this.categoria = categoria;
        this.horario = date;
    }

    @PrimaryGeneratedColumn()
    id_transacao: number;

    @Column()
    categoria: string;

    @Column()
    titulo: string;

    @Column()
    valor: number;

    @Column()
    tipo: "entrada" | "saida";

    @Column()
    horario: string;
}
