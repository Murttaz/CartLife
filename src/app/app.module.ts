import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';

import { AppRoutingModule } from './app-routing.module';


import { ShoppingListService } from './services/shopping-list.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
     
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ShoppingListService,
  ],

})
export class AppModule {}
