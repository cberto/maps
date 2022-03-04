import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingsoonComponent } from './comingsoon.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,

  ],
  declarations: [ComingsoonComponent],
})
export class ComingsoonModule { }
