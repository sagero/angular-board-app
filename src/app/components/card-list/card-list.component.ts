import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import CardList from 'src/app/models/CardList';
import Card from 'src/app/models/Card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() public cardList: CardList;
  @Input() searchCriterion: string
  @Output() removeCard = new EventEmitter<Card>()

  public removeItem(item: Card) {
    const index = this.cardList.cards.findIndex(i => i.id === item.id);
    this.cardList.cards.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }
}
