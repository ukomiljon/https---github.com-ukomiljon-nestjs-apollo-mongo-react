import { Resolver, Query } from '@nestjs/graphql';
import { DashboardType } from './dashboard.dto';
import { DashboardsService } from './dashboards.service';

@Resolver('dashboards')
export class DashboardsResolver {
  constructor(private readonly dashboardsService: DashboardsService) {}

  @Query(() => [DashboardType])
  async dashboards() {
    return [{name:'hi guys', type:"ed.hoc"}];
  }
}
