import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
 
import { DatasourcesService } from './datasources.service';
import { DatasourceDto } from './dto/datasource.dto';

@Controller('datasources')
export class DatasourcesController {

    constructor(private readonly datasourcesService: DatasourcesService) {

    }

    @Get()
    async find(): Promise<any> {
        return await this.datasourcesService.find()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<any> {
        return await this.datasourcesService.findOne(id)
    }

    @Post()
    async create(@Body() datasource: DatasourceDto): Promise<any> {        
        return await this.datasourcesService.create(datasource)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() datasource: DatasourceDto): Promise<any> {
        return await this.datasourcesService.update(id, datasource)
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
        return await this.datasourcesService.delete(id)
    }
}
