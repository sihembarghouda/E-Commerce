import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesComponent } from './pages/clothes/clothes.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { bagsComponent } from './pages/bags/bags.component';

import { HomeComponent } from './pages/home/home.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations:[
    AppComponent,
    bagsComponent,
    ClothesComponent,
    ShoesComponent,
    ConnexionComponent,
    HomeComponent,
    OrderFormComponent,
    RegisterComponent,
    PanierComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

