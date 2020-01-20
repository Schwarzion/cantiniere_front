import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersListComponent } from './components';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { IngredientDetailComponent } from './components/ingredient-detail/ingredient-detail.component';
import { ValidateComponent } from './components/validate/validate.component';

const routes: Routes = [
  { path: '', component: OrdersListComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'ingredientDetail/:key', component: IngredientDetailComponent },
  { path: 'validate', component: ValidateComponent },
  // Redirection en cas de route non trouvée
  // {path: '**', component: OrdersListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantiniereRoutingModule {}
