import { Component, OnInit, Output } from '@angular/core';
import { OrderRestControllerService } from 'src/app/services/order-rest-controller.service';
import { UserService } from 'src/app/services/user.service';
import { CustomDateObject, getTodayDate } from 'src/app/utils/date';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  orders: any[];
  todayDate: CustomDateObject;
  startDate;
  endDate;

  constructor(private orderService: OrderRestControllerService, private userService: UserService) { }

  ngOnInit() {
    this.todayDate = getTodayDate();
    this.getOrders();
    // this.getCurentUser();
  }

  getOrders() {
    const tomorrow = new Date(this.todayDate.date).setDate(this.todayDate.date.getDate() + 1).toLocaleString();

    this.orderService.getOrdersByDate(this.todayDate.string, tomorrow).subscribe(orders => {
      this.orders = orders;
    }, err => console.dir(err));
  }

  getCurentUser() {
    this.userService.getUser().subscribe(user => console.log('user', user));
  }

  getOrdersByDate() {
    this.orderService.getOrdersByDate(this.startDate, this.endDate).subscribe(orders => this.orders = orders);
  }

  orderAction(orderId: number) {
    const filteredOrder = this.orders.filter(order => order.id !== orderId);
    this.orders = filteredOrder;
  }

}
