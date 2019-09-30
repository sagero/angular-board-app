import { Component, Input } from '@angular/core';
import CardList from 'src/app/models/CardList';
import Card from 'src/app/models/Card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() public searchCriterion: string;



  public items:CardList [] =[
    {
      id: '0',
      name:'Backlog',
      cards: [
        {
          id: '1',
          name: 'task1',
          description: 'desc1'
        },
        {
          id: '2',
          name: 'task2',
          description: 'desc2'
        },
        {
          id: '3',
          name: 'task3',
          description: 'desc3'
        }
      ]
    },
    {
      id: '1',
      name:'In progress',
      cards: [
        {
          id: '4',
          name: 'task1',
          description: 'desc1'
        },
        {
          id: '5',
          name: 'task2',
          description: 'desc2'
        }
      ]
    },
    {
      id: '2',
      name:'Done',
      cards: [
        {
          id: '6',
          name: 'task1',
          description: 'desc1'
        }
      ]
    }
  ];

}
