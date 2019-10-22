import { Injectable } from '@angular/core';
import CardList from '../models/CardList';
import Card from '../models/Card';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  addTask(card: Card, group: string) {
    card.id= '' + this.nextId();
    if (card.name) {
      this.items[this.getIdGroup(group)].cards.push(card);
    }
  }

  nextId() {
    let next=0;
    for (const card of this.items) {
      for (const item of card.cards) {
        if (Number(item.id) > next) {
          next=Number(item.id);
        }
      }
    }
    return ++next;
  }

  getAssignee() {
    const result: User[] = [];
    for (const card of this.items) {
      for (const item of card.cards) {
        if ((item.assignee)&&(!result.includes(item.assignee))) {
          result.push(item.assignee);
        }
      }
    }
    return result;
  }

  removeItem(id) {
    for (const card of this.items) {
      const index = card.cards.findIndex(i => i.id === id);
      if (index!=-1) {
        card.cards.splice(index, 1);
      }
    }
  }

  update(updateCard: Card) {

    this.items.forEach((card, type: number) => {
      card.cards.forEach((card: Card, index: number) => {
        if (card.id === updateCard.id) {
          this.items[type].cards[index] = updateCard;
        }
      })
    })
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

  getIdGroup(name) {
    let result=0;
    this.items.forEach((card, index: number) => {
     if (card.name == name) {
        result= index;
      }
    })
    return  result;
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
            id: '2',
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
      name:'In-progress',
      cards: [
        {
          id: '4',
          name: 'task1',
          description: 'desc1',
          assignee: {
            id: '1',
            firstName: 'Andrei',
            lastName: 'Petrov'
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
