import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/productos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    controllers: [],
    providers: []
})
export class ProductModule { }