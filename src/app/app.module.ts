import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import {CarouselModule} from "angular2-carousel";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    RoutingModule,
    CarouselModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
