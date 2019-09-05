import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //Charge un module qui va appeler les routes du module souhaité
  {path: 'cantiniere', loadChildren: () => import('src/app/cantiniere/cantiniere.module').then(m => m.CantiniereModule)},
  {path: 'user', loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule)},
  // Redirection en cas de route non trouvée
  { path: '**', redirectTo: 'cantiniere'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
