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
          description: 'desc1',
          dueDate: new Date('Tue Oct 05 2019 01:02:48 GMT+0300'),
          assignee: {
            id: '1',
            firstName: 'Siarhei',
            lastName: 'Kiniou'
          }
        },
        {
          id: '2',
          name: 'task2',
          description: 'desc2',
          dueDate: new Date('Tue Oct 02 2019 01:02:48 GMT+0300')
        },
        {
          id: '3',
          name: 'task3',
          description: 'desc3'
        }
      ],
      isDoneSection: false
    },
    {
      id: '1',
      name:'In progress',
      cards: [
        {
          id: '4',
          name: 'task1',
          description: 'desc1',
          assignee: {
            id: '1',
            firstName: 'Siarhei',
            lastName: 'Kiniou'
          }
        },
        {
          id: '5',
          name: 'task2',
          description: 'desc2'
        }
      ],
      isDoneSection: false
    },
    {
      id: '2',
      name:'Done',
      cards: [
        {
          id: '6',
          name: 'task1',
          description: 'desc1',
          dueDate: new Date('Tue Oct 02 2019 01:02:48 GMT+0300')
        }
      ],
      isDoneSection: true
    }
  ];

}
