import { Component, Input, Output, EventEmitter } from '@angular/core';
import CardList from '../../models/CardList';
import Card from '../../models/Card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() cardList: CardList;
  @Input() searchCriterion: string
  @Output() removeCard = new EventEmitter<Card>()

  public removeItem(item: Card) {
    const index = this.cardList.cards.findIndex(i => i.id === item.id);
    this.cardList.cards.splice(index, 1);
  }
}
