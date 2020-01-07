import { Component, OnInit } from '@angular/core';
import { OrderRestControllerService } from 'src/app/services/order-rest-controller.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders: any = ['Pizza', 'Steak frite', 'Pâtes bolo', 'La réponse D' ]

  constructor(private orderService: OrderRestControllerService, private userService: UserService) { }

  ngOnInit() {
    this.getOrders();
    this.getCurentUser();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(orders => this.orders = orders, err => console.dir(err));
  }

  getCurentUser() {
    this.userService.getUser().subscribe(user => console.log('user', user))
  }

}
