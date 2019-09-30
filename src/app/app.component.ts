import { Component } from '@angular/core';

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
}
