import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  OrdersListComponent,
  UserOrderHistoryComponent,
  AddMenuComponent,
  UserProfileComponent,
} from './components';
import { FundingComponent, MenuComponent, MealComponent } from './containers';
import { AddMealComponent } from './components/add-meal/add-meal.component';

const routes: Routes = [
  { path: 'orders', component: OrdersListComponent },
  { path: 'manage', component: FundingComponent },
  { path: 'userhistory/:id', component: UserOrderHistoryComponent },
  { path: 'userprofile/:id', component: UserProfileComponent },
  { path: 'funding', component: FundingComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/add', component: AddMenuComponent },
  { path: 'menu/edit/:id', component: AddMenuComponent },
  { path: 'meal', component: MealComponent },
  { path: 'meal/add', component: AddMealComponent },
  { path: 'meal/edit/:id', component: AddMealComponent },
  // Redirection en cas de route non trouvée
  { path: '**', component: FundingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantiniereRoutingModule {}
