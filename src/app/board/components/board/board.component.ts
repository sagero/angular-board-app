import { Component, Inputt, OnInit  } from '@angular/core';
import CardList from '../../models/CardList';
import Card from '../../models/Card';
import { BoardService } from '../../servises/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent  implements OnInit {
 // @Input() public searchCriterion: string;
  constructor(private boardService: BoardService) { }
  public items: CardList[];

  ngOnInit(): void {
    this.items = this.boardService.items;
  }
}
