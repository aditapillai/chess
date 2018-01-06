import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input('ranks')
  private ranks: number[];

  @Input('files')
  private files: string[];

  constructor() {
  }

  ngOnInit() {

  }

  private onNgClass(rank: number, file: string): any {

    return {
      dark: this.isDarkSquare(rank, file),
      light: !this.isDarkSquare(rank, file),
      blank: this.isBlank(rank, file),
      occupied: !this.isBlank(rank, file)
    };
  }

  private isDarkSquare(rank: number, file: string) {
    let isDarkSquare = false;
    if ((rank % 2 === 0 && file.charCodeAt(0) % 2 === 0) || (rank % 2 !== 0 && file.charCodeAt(0) % 2 !== 0)) {
      isDarkSquare = true;
    } else {
      isDarkSquare = false;
    }
    return isDarkSquare;
  }

  private isBlank(rank: number, file: string): boolean {
    if (rank >= 3 && rank <= 6) {
      return true;
    }
    return false;
  }
}
