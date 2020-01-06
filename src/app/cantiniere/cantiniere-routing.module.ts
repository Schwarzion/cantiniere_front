import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  OrdersListComponent,
  UserOrderHistoryComponent,
  AddMenuComponent,
  UserProfileComponent,
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
  { path: 'userprofile/:id', component: UserProfileComponent },
  { path: 'funding', component: FundingComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/add', component: AddMenuComponent },
  { path: 'menu/edit/:id', component: AddMenuComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'ingredientDetail/:id', component: IngredientDetailComponent },
  { path: 'ingredientForm', component: IngredientFormComponent },
  { path: 'validate', component: ValidateComponent },
  { path: '**', component: FundingComponent},
  { path: '', component: OrdersListComponent },
  { path: 'ingredients', component:IngredientsComponent },
  // Redirection en cas de route non trouvée
  // {path: '**', component: OrdersListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantiniereRoutingModule {}
