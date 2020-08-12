import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report } from './report.interface';

@Injectable()
export class ReportsService {

    constructor(
        @InjectModel('report')
        private readonly reportModule: Model<Report>
    ) { }

    async findAll(): Promise<any[]> {
        return await this.reportModule.find()
    }

    async find(id: string): Promise<any> {
        return await this.reportModule.findById(id)
    }

    async create(report: any): Promise<any> {
        return await new this.reportModule(report).save()
    }

    async update(id: string, report: any): Promise<any> {
        return await this.reportModule.findByIdAndUpdate(id, report)
    }

    async delete(id: string): Promise<any> { 
        return await this.reportModule.findByIdAndRemove(id)
    }
}
