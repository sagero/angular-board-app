import { Component, Input, Output, EventEmitter } from '@angular/core';
import Card from '../../models/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {

  @Input() card: Card
  @Input() isDone: boolean
  @Output() remove = new EventEmitter<Card>()
  @Output() edit = new EventEmitter<Card>()

  public onRemove() {
    this.remove.emit(this.card);
  }

  public onEdit() {
    this.edit.emit(this.card);
  }
}
