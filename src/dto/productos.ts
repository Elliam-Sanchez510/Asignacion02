import { IsString } from "class-validator";
import { IsNotEmpty, MinLength, IsNumber, } from "class-validator/types/decorator/decorators";

export class Marcas {
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    nombre: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    descripcion: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    stock: string;
}