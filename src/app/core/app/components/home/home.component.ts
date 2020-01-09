import { Component, OnInit } from '@angular/core';
import { MenuRestControllerService } from "../../../../services/menu-rest-controller.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private menuList;
  private menuList2;
  constructor(private menuService : MenuRestControllerService) { }

  ngOnInit() {
    this.getMenuList();
    this.getMenuWeek();
  }
  getMenuList(){
    this.menuService.getMenuTodayList()
        .subscribe(data => {
          this.menuList = Object.values(data);
        })
  }
  getMenuWeek(){
    this.menuService.getMenuWeekList()
        .subscribe(data => {
          this.menuList2 = Object.values(data);
          console.log(this.menuList2);
        })
  }
}
