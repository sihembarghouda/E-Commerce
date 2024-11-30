import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesComponent } from './pages/clothes/clothes.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { bagsComponent } from './pages/bags/bags.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { RegisterComponent } from './register/register.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: 'clothes', component: ClothesComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'bags', component: bagsComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'order', component: OrderFormComponent },
  { path: 'panier', component: PanierComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



