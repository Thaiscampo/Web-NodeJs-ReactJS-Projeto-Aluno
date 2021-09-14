import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity()
export class Tasks{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    nome: string;
 
    @Column()
    ra: string;

    @Column()
    dataDeNascimento: Date;

    @Column()
    endereco: string;

    @Column()
    matriculado: boolean;

    @Column()
    idade: number;
 
    @Column({
        default: false,
    })
    finished: boolean;
 
    @CreateDateColumn()
    create_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;
}
