import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator/types/decorator/decorators';

@Entity()
export class Marcas {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'text', unique: true,})
    name: string;

    @Column({type: 'text', unique: true, })
    categoria: string;

    @Column({type: 'text', unique: true, })
    pais_origen: string;

    @Column({type: 'text'})
    observacion?: string;
}