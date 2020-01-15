import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Le loadChildren va charger le module avec ses routes quand il sera appelé
  {
    path: '',
    loadChildren: () => import('./app/app.module').then(m => m.AppModule),
  },

  // Redirection en cas de route non trouvée
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
