import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  OrdersListComponent,
  UserOrderHistoryComponent,
  AddMenuComponent,
  UserProfileComponent
} from './components';
import { FundingComponent, MenuComponent } from './containers';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { IngredientDetailComponent } from './components/ingredient-detail/ingredient-detail.component';
import { ValidateComponent } from './components/validate/validate.component';

const routes: Routes = [
  { path: 'orders', component: OrdersListComponent },
  { path: 'manage', component: FundingComponent },
  { path: 'userhistory/:id', component: UserOrderHistoryComponent },
  { path: 'userprofile/:id', component: UserProfileComponent },
  { path: 'funding', component: FundingComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/add', component: AddMenuComponent },
  { path: 'menu/edit/:id', component: AddMenuComponent },
  // Redirection en cas de route non trouvée,
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'ingredientDetail/:key', component: IngredientDetailComponent },
  { path: '**', component: FundingComponent},
  { path: '', component: OrdersListComponent },
  // Redirection en cas de route non trouvée
  // {path: '**', component: OrdersListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantiniereRoutingModule {}
