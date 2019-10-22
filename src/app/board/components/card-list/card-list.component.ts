import { Component, Input, Output, EventEmitter } from '@angular/core';
import CardList from '../../models/CardList';
import Card from '../../models/Card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {


  @Input() cardList: CardList;
  @Input() searchCriterion: string
  @Output() removeCard = new EventEmitter<Card>()

  constructor(public router: Router) { };

  public removeItem(item: Card) {
    const index = this.cardList.cards.findIndex(i => i.id === item.id);
    this.cardList.cards.splice(index, 1);
  }

  public onCreateTask() {
    this.router.navigate(['board', 'create']);
  }
}
