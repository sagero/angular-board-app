import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Card from '../../models/Card';
import User from '../../models/User';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Input() card: Card;
  @Input() users: User[];
  @Output() public cancel = new EventEmitter();
  @Output() public save = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    this.save.emit(this.card);
  }

}
