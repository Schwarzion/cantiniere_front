import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components';
import { NewAccountComponent } from './components';
import { EditComponent } from './components';
import { AddOrderComponent } from './components/add-order/add-order.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'newaccount', component: NewAccountComponent },
  { path: 'edit', component: EditComponent },
  { path: 'add', component: AddOrderComponent },
  // Redirection en cas de route non trouvée
  { path: '**', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
