import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BoardComponent } from './components/board/board.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';
// import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule} from '@angular/material';
import { FilterPipe } from './pipes/filter.pipe';
import { CardDueDirective } from './directives/card-due.directive';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { BoardRoutingModule } from './board-routing.module';
@NgModule({
  declarations: [
    // ToolbarComponent,
    BoardComponent,
    CardListComponent,
    CardItemComponent,
    FilterPipe,
    CardDueDirective,
    BoardPageComponent,
    CreatePageComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,

    MatButtonModule,
    MatInputModule,
    //FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class BoardModule { }
