import { Component } from '@angular/core';

@Component({
  template: `<div>
  <ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" [routerLink]="['orders']">Commandes</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" [routerLink]="['manage']">Gestion</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" [routerLink]="['userhistory', user.id]">Historique utilisateur</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" [routerLink]="['userprofile', user.id]">Profil Utilisateur</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" [routerLink]="['funding']"></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" [routerLink]="['menu']">Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" [routerLink]="['menu/add']">Ajouter un menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" [routerLink]="['menu/edit', meal.id]">Editer un menu</a>
  </li>
</ul>
  </div>`,
})
export class CantiniereComponent {}
