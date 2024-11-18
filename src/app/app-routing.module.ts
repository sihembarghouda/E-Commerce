import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesComponent } from './pages/clothes/clothes.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { SalesComponent } from './pages/sales/sales.component';
import { bagsComponent } from './pages/bags/bags.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'clothes', component: ClothesComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'bags', component: bagsComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



