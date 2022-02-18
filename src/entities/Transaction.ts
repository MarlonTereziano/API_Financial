import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { User } from "./User";

@Entity("transaction")
export class Transaction {
    @PrimaryColumn("uuid")
    id: string;

    @Column("uuid")
    owner_id: string;

    @ManyToOne(()=> User)
    @JoinColumn({name: "owner_id"})
    owner: User;

    @Column("varchar")
    title: string;

    @Column("varchar")
    category : string;

    @Column("varchar")
    value : number;

    @Column("varchar")
    type : string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}