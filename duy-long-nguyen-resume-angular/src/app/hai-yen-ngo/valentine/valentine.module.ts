import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValentineRoutingModule } from './valentine-routing.module';
import { SwiperModule } from "swiper/angular";
import { ValentineComponent } from "./valentine.component";
import { SpinningWheelComponent } from './spinning-wheel/spinning-wheel.component';


@NgModule({
    declarations: [
        ValentineComponent,
        SpinningWheelComponent,
    ],
    imports: [
        CommonModule,
        ValentineRoutingModule,
        SwiperModule,
    ]
})
export class ValentineModule { }
