import { Component, Input, OnInit  } from '@angular/core';
import CardList from '../../models/CardList';
import Card from '../../models/Card';
import { BoardService } from '../../servises/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent  implements OnInit {
  @Input() public searchCriterion: string;
  constructor(private boardService: BoardService, private router: Router,) { }
  public items: CardList[];

  ngOnInit(): void {
    this.items = this.boardService.items;
  }

  public onRemove(item: Card) {
    this.boardService.removeItem(item.id);
  }

  public onEdit(item: Card) {
    this.router.navigate(['board','edit', item.id]);
  }

  public onCreate() {
    this.router.navigate(['board', 'create']);
  }
}
