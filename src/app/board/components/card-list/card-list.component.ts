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
  @Output() remove = new EventEmitter<Card>()
  @Output() edit = new EventEmitter<Card>()
  @Output() create = new EventEmitter<string>();

  constructor(public router: Router) { };

  public onRemove(item: Card) {
    this.remove.emit(item);
  }

  public onEdit(item: Card) {
    this.edit.emit(item);
  }

  public onCreate(group: string) {
    this.create.emit(group);
  }
}
