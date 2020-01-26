import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OrderRestControllerService } from 'src/app/services/order-rest-controller.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() order;
  @Output() sendOrderAction = new EventEmitter();

  isToggled = false;

  quantityMeals = [];

  envURL;

  constructor(private orderService: OrderRestControllerService) {}

  ngOnInit() {
    this.envURL = environment.apiUrl;
    console.log(this.order);
  }

  toggleOrder() {
    this.isToggled = !this.isToggled;
  }

  getTotalOrderPrice() {
    if (this.order.menu) {
      return this.order.menu.priceDF;
    } else if (this.order.quantityMeals) {
      let total = 0;
      for (const item of this.order.quantityMeals) {
        total += item.meal.priceDF;
      }
      return total;
    }
  }

  validateOrder() {
    this.orderService.validateOrder(this.order.id)
      .subscribe(res => {
        if (res.id) {
          this.sendOrderAction.emit(this.order.id);
        }
      },
      err => console.dir(err));
  }

  cancelOrder() {
    this.orderService.cancelOrder(this.order.id)
    .subscribe(res => {
      if (res.id) {
        this.sendOrderAction.emit(this.order.id);
      }
    },
    err => console.dir(err));
  }
}
