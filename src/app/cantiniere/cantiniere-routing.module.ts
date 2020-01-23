import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  OrdersListComponent,
  UserOrderHistoryComponent,
  AddMenuComponent,
  IngredientsComponent,
  IngredientDetailComponent,
  ValidateComponent,
  IngredientFormComponent
} from './components';
import { FundingComponent, MenuComponent } from './containers';

const routes: Routes = [
  { path: 'orders', component: OrdersListComponent },
  { path: 'manage', component: FundingComponent },
  { path: 'userhistory/:id', component: UserOrderHistoryComponent },
  { path: 'funding', component: FundingComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/add', component: AddMenuComponent },
  { path: 'menu/edit/:id', component: AddMenuComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'ingredientDetail/:id', component: IngredientDetailComponent },
  { path: 'validate', component: ValidateComponent },
  { path: 'ingredientForm', component: IngredientFormComponent }
  // Redirection en cas de route non trouvée
/*   { path: '**', component: OrdersListComponent },
 */];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantiniereRoutingModule {}
