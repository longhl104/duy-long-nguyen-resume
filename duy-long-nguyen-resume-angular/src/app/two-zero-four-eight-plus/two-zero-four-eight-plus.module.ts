import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoZeroFourEightPlusRoutingModule } from './two-zero-four-eight-plus-routing.module';
import { TwoZeroFourEightPlusComponent } from './two-zero-four-eight-plus.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [
    TwoZeroFourEightPlusComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    TwoZeroFourEightPlusRoutingModule
  ]
})
export class TwoZeroFourEightPlusModule { }
