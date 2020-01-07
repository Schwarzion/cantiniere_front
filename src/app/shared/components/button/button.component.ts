import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() isDisabled;
  @Input() text;
  @Output() action = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (typeof this.isDisabled === 'undefined') {
      this.isDisabled = false;
    }
  }

  sendAction() {
    this.action.emit();
  }
}
