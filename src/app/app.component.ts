import { Component } from '@angular/core';
import CardList from './models/CardList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-board-app';
  public searchText: string;
  public onSearch(criterion: string) {
    this.searchText = criterion;
    console.log(this.searchText);
  }

  public items:CardList[] =[
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
  ]
}
