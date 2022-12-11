import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HaiYenNgoComponent } from './hai-yen-ngo/hai-yen-ngo.component';
import { DuyLongNguyenComponent } from './duy-long-nguyen/duy-long-nguyen.component';
import { ResumeButtonComponent } from './shared/resume-button/resume-button.component';
import { AddressComponent } from "./shared/address/address.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HaiYenNgoComponent,
    DuyLongNguyenComponent,
    ResumeButtonComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
