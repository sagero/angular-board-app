import { Component, OnInit } from '@angular/core';
import Card from '../../models/Card';
import User from '../../models/User';
import { BoardService } from '../../servises/board.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public card: Card;
  public users: User[];
  constructor(private boardService: BoardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.card = Object.assign({},this.boardService.getTaskById(this.route.snapshot.params['id']));
    this.users = this.boardService.getAssignee();
  }

  save(card: Card) {
    this.boardService.update(card);
    this.router.navigateByUrl('/board');
  }

  cancel() {
    this.router.navigateByUrl('/board');
  }
}
