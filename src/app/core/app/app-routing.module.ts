import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LunchLadyGuard } from '../authguards/lunch-lady-guard.guard';
import { UserGuard } from '../authguards/user.guard';

const routes: Routes = [
  //Charge un module qui va appeler les routes du module souhaité
  { path: '', component: HomeComponent },
  {
    path: 'cantiniere',
    loadChildren: () =>
      import('src/app/cantiniere/cantiniere.module').then(
        m => m.CantiniereModule,
      ),
    canActivate: [LunchLadyGuard],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('src/app/user/user.module').then(m => m.UserModule),
    canActivate: [UserGuard],
  },
  // Redirection en cas de route non trouvée
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
