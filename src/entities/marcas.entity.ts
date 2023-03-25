import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator/types/decorator/decorators';

@Entity()
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'text'})
    nombre: string;

    @Column({type: 'text'})
    descripcion: string;

    @Column({type: 'numeric'})
    price: number;

    @Column({type: 'numeric'})
    stock: number;

}