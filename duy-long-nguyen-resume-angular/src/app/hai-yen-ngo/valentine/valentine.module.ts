import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValentineRoutingModule } from './valentine-routing.module';
import { SwiperModule } from "swiper/angular";
import { ValentineComponent } from "./valentine.component";


@NgModule({
    declarations: [
        ValentineComponent,
    ],
    imports: [
        CommonModule,
        ValentineRoutingModule,
        SwiperModule,
    ]
})
export class ValentineModule { }
