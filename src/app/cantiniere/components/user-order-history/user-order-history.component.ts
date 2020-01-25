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
  today;
  id: number;
  private sub: any;
  startDate;
  endDate;

  ngOnInit() {
    this.today = true;
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
    this.orderService.getDayOrderForUser(this.id).subscribe(resp => {
      this.history = resp;
    });
  }

  searchByDate() {
    this.today = false;
    this.orderService.getCreatedOderByDateForUser( '2000.01.01', '2020.01.12', this.id).subscribe(resp => {
      this.history = resp;
    });
  }
}
