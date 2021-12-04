import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
// Import bar charts, all with Chart suffix
import { BarChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, GridComponent } from 'echarts/components';
// Import the Canvas renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';
import 'echarts/theme/macarons.js';

echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]);
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    // FusionChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class DashboardModule {}
