import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersListComponent } from './components';
import { FundingComponent } from './containers';

const routes: Routes = [
  { path: 'orders', component: OrdersListComponent },
  { path: 'manage', component: FundingComponent },
  { path: '**', component: FundingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantiniereRoutingModule {}
