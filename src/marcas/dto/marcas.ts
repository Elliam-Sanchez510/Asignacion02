import { IsString } from "class-validator";
import { IsNotEmpty, MinLength, IsNumber, IsOptional, } from "class-validator/types/decorator/decorators";

export class Marcas {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    nombre: string;

    @IsString()
    @IsNotEmpty()
    categoria: string;

    @IsNumber()
    @IsNotEmpty()
    @MinLength(3)
    pais_origen: string;

    @IsNumber()
    @IsOptional()
    observacion: string;
}