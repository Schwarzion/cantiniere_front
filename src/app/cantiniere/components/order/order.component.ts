import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OrderRestControllerService } from 'src/app/services/order-rest-controller.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() order;
  @Output() sendOrderAction = new EventEmitter();

  isToggled = false;

  constructor(private orderService: OrderRestControllerService) {}

  ngOnInit() {}

  toggleOrder() {
    this.isToggled = !this.isToggled;
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
