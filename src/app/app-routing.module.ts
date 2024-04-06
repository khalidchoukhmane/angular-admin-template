import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilleProduitComponent } from './pages/famille-produit/famille-produit.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { BonEntrerComponent } from './pages/bon-entrer/bon-entrer.component';
import { BonSortieComponent } from './pages/bon-sortie/bon-sortie.component';
import { FpAddEditComponent } from './pages/famille-produit/fp-add-edit/fp-add-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo : 'produit'
  },
  {
    path: 'famille-produit',
    component: FamilleProduitComponent,
  },
  {
    path: 'produit',
    component: ProduitsComponent,
  },
  {
    path: 'bent',
    component: BonEntrerComponent,
  },
  {
    path: 'bs',
    component: BonSortieComponent,
  },
  {
    path: 'fp-add-edit',
    component: FpAddEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }