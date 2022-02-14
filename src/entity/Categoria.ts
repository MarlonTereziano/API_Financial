import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Categoria {

    constructor(tipo_categoria: string) {
        this.tipo_categoria = tipo_categoria;
    }

    @PrimaryGeneratedColumn()
    id_categoria: number;

    @Column()
    //Por exemplo: "Estudos", "Viagem", "Casa", "Viagem", "Compras"
    tipo_categoria: string;
}
