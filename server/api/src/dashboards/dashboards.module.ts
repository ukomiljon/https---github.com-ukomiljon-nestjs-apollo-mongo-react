import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardsResolver } from './dashboard.resolver';
import { DashboardSchema } from './dashboard.schema';
import { DashboardsService } from './dashboards.service';

@Module({
  imports:[MongooseModule.forFeature([{name:"dashboards", schema:DashboardSchema}] )],
  providers: [DashboardsService, DashboardsResolver]
})
export class DashboardsModule {}
