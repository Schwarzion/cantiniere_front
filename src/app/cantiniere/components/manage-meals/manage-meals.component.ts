import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-meals',
  templateUrl: './manage-meals.component.html',
  styleUrls: ['./manage-meals.component.scss'],
})
export class ManageMealsComponent implements OnInit {
  @Input() meals;
  @Output() sendDelete = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  deleteMenu(mealId) {
    this.sendDelete.emit(mealId);
  }
}
