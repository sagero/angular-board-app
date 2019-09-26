import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Card from 'src/app/models/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() card: Card
  @Input() isDone: boolean
  @Output() removeCard = new EventEmitter<Card>()

  constructor() { }

  ngOnInit() {
  }

}
