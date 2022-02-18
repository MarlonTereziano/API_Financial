import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTransaction1645055938373 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'transaction',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',                        
                    },
                    {
                        name: 'owner_id',
                        type: 'varchar',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },  
                    {
                        name: 'category',
                        type: 'varchar',
                    }, 
                    {
                        name: 'value',
                        type: 'integer',
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },                   
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },                    
                ],
                foreignKeys: [
                    {
                        name: 'fk_transaction_owner',
                        columnNames: ['owner_id'],
                        referencedTableName: 'user',
                        referencedColumnNames: ['id'],
                    },
                ],


            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transaction');
    }

}
