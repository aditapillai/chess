import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChessComponent } from './chess/chess.component';
import { BoardComponent } from './chess/board/board.component';
import { SquareComponent } from './chess/board/square/square.component';
import { PieceComponent } from './chess/piece/piece.component';


@NgModule({
  declarations: [
    AppComponent,
    ChessComponent,
    BoardComponent,
    SquareComponent,
    PieceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
