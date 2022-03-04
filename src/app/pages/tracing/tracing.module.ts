import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracingComponent } from './tracing.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbActionsModule, NbButtonGroupModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { NbProgressBarModule, NbStepperModule, NbTagModule, NbToggleModule } from '@nebular/theme';
import { FormsRoutingModule } from '../forms/forms-routing.module';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ChartsModule } from 'ng2-charts';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CrossroadComponent } from './crossroad/crossroad.component';
import { MapComponent } from './map/map.component';
import { PopoverComponent } from './popover/popover.component';
import { CrossroadDetailComponent } from './crossroad-detail/crossroad-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    FormsRoutingModule,
    LeafletModule.forRoot(),
    HttpClientModule,
    NbProgressBarModule,
    NbStepperModule,
    NbButtonGroupModule,
    NbEvaIconsModule,
    NbIconModule,
    CommonModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    FormsRoutingModule,
    ChartsModule,
    NbToggleModule,
    NbIconModule,
    NbButtonGroupModule,
    NbActionsModule,
    NbTagModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatButtonToggleModule,
    NbCardModule,

  ],
  declarations: [
    TracingComponent,
    CrossroadComponent,
    MapComponent,
    PopoverComponent,
    CrossroadDetailComponent,



  ],
})
export class TracingModule { }
