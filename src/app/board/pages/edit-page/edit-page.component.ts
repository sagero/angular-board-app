import { Component, OnInit } from '@angular/core';
import Card from '../../models/Card';
import { BoardService } from '../../servises/board.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public card: Card;
  constructor(private boardService: BoardService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.card = this.boardService.getTaskById(this.route.snapshot.params['id']);
  }

}
