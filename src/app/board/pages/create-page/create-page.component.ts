import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Card from '../../models/Card';
import User from '../../models/User';
import { BoardService } from '../../servises/board.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  public users: User[];
  public card: Card;
  public group: string;
  constructor(private router: Router, private route: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit() {
    this.group = this.route.snapshot.params['group'];

    this.users = this.boardService.getAssignee();
    this.card= {
      id: '',
      name: '',
      description: '',
      dueDate: null,
      assignee: null
    };
  }

  save(card: Card) {
    this.boardService.addTask(card, this.group)
    this.router.navigateByUrl('/board');
  }

  cancel() {
    this.router.navigateByUrl('/board');
  }
}
