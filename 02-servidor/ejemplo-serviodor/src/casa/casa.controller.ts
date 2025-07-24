import { 
  Controller, Get, 
  Query} from '@nestjs/common';
import { CasaService } from './casa.service';
import { FindManyOptions, Like } from 'typeorm';
import { BuscarDto } from './dto/buscar.dto';
import { Casa } from './casa.entity';
@Controller('api/casa')
export class CasaController {
    constructor(
        private readonly casaService: CasaService
    ) {

    }
    @Get()
    obtener(
        @Query() parametrosConsulta: BuscarDto,
    ){
        const objetoBusqueda: FindManyOptions<Casa> = {};

        if (parametrosConsulta.nombre) {
            objetoBusqueda.where = {
                nombre: Like("%" + parametrosConsulta.nombre + "%"),
            };
        }
        return this.casaService.obtenerTodos(objetoBusqueda);
    }

}