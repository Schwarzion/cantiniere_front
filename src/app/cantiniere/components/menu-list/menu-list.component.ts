import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  @Input() menus;
  @Output() sendDelete = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  deleteMenu(menuId) {
    this.sendDelete.emit(menuId);
  }
}
