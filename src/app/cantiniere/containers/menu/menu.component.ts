import { Component, OnInit } from '@angular/core';
import { MenuRestControllerService } from 'src/app/services/menu-rest-controller.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus = [];

  constructor(private menuService: MenuRestControllerService) { }

  ngOnInit() {
    this.getAllMenus();
  }

  getAllMenus() {
    this.menuService.getAllMenus().subscribe(menus => this.menus = menus );
  }

  deleteMenu(menuId) {
    console.log('mneuId', menuId);
    this.menuService.deleteMenu(menuId).subscribe(res => {
      console.log(res);
      this.menus = this.menus.filter(menu => menu.id !== menuId);
    });
  }

}
