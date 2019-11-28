import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // Un input permet de recevoir de la donnée d'un composant parent
  @Input() items = [];

  constructor() { }

  ngOnInit() {
  }

}
