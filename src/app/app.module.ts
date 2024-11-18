import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesComponent } from './pages/clothes/clothes.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { bagsComponent } from './pages/bags/bags.component';
import { SalesComponent } from './pages/sales/sales.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations:[
    AppComponent,
    bagsComponent,
    ClothesComponent,
    ShoesComponent,
    AccessoriesComponent,
    ConnexionComponent,
    SalesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

