import { Injectable } from '@angular/core';
import CardList from '../models/CardList';
import Card from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  removeItem(id) {
    for (const card of this.items) {
      const index = card.cards.findIndex(i => i.id === id);
      if (index!=-1) {
        card.cards.splice(index, 1);
      }
    }
  }

  getTaskById(id) {
    for (const card of this.items) {
      for (const item of card.cards) {
        if (item.id === id) {
          return item;
        }
      }
    }
  }

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
