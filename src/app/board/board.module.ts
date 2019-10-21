import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BoardComponent } from './components/board/board.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule} from '@angular/material';
import { FilterPipe } from './pipes/filter.pipe';
import { CardDueDirective } from './directives/card-due.directive';

@NgModule({
  declarations: [
    //AppComponent,
    ToolbarComponent,
    BoardComponent,
    CardListComponent,
    CardItemComponent,
    FilterPipe,
    CardDueDirective
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports: [
    ToolbarComponent,
    BoardComponent
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class BoardModule { }
