import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { OrderRestControllerService } from 'src/app/services/order-rest-controller.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-order-history',
  templateUrl: './user-order-history.component.html',
  styleUrls: ['./user-order-history.component.scss']
})
export class UserOrderHistoryComponent implements OnInit {

  constructor(private orderService: OrderRestControllerService, private route: ActivatedRoute) { }

  history;
  id: number;
  private sub: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
    this.orderService.getOrderByDateForUser(this.id).subscribe(resp => {
      console.log(resp);
      this.history = resp;
    });
  }
}
