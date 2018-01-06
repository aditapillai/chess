import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {
  private ranks: number[] = [8, 7, 6, 5, 4, 3, 2, 1];
  private files: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  constructor() {
  }

  ngOnInit() {
  }

}
