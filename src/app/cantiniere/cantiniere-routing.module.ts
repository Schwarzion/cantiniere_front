import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersListComponent } from './components';


const routes: Routes = [
  {path: 'orders', component: OrdersListComponent},
  // Redirection en cas de route non trouvée
  {path: '**', component: OrdersListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CantiniereRoutingModule { }
