import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersListComponent } from './components';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

const routes: Routes = [
  { path: '', component: OrdersListComponent },
  { path: 'ingredients', component:IngredientsComponent },
  // Redirection en cas de route non trouvée
  {path: '**', component: OrdersListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantiniereRoutingModule {}
