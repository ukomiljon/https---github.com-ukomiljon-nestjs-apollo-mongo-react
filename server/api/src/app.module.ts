import { Module } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { MongooseModule } from '@nestjs/mongoose'; 
import { DatasourcesModule } from './datasources/datasources.module'; 
import { DashboardsModule } from './dashboards/dashboards.module';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    ReportsModule,    
    DatasourcesModule, 
    DashboardsModule,
    MongooseModule.forRoot('mongodb://localhost/reactbi-db', { useNewUrlParser: true, useUnifiedTopology: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
