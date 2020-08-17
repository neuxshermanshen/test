import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// NGX_BOOTSTRAP_MODULES
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SliderComponent } from './slider/slider.component';
import { BlockBottomComponent } from './block-bottom/block-bottom.component';
import { BlockTopComponent } from './block-top/block-top.component';
import { BlockItemComponent } from './block-item/block-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

const NGX_BOOTSTRAP_MODULES = [
  CarouselModule.forRoot(),
  BsDropdownModule.forRoot(),
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...NGX_BOOTSTRAP_MODULES
  ],
  declarations: [
    AppComponent,
    SliderComponent,
    BlockBottomComponent,
    BlockTopComponent,
    BlockItemComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
