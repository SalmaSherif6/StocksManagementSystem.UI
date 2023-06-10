import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketScreenComponent } from './market-screen/market-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderScreenComponent } from './order-screen/order-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketScreenComponent,
    OrderScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
