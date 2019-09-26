import { Component, Input, Output, EventEmitter } from '@angular/core';
import Card from 'src/app/models/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {

  @Input() card: Card
  @Input() isDone: boolean
  @Output() removeCard = new EventEmitter<Card>()

  public onRemove() {
    this.removeCard.emit(this.card);
  }
}
