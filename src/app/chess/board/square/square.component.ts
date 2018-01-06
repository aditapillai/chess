import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input('rank')
  private rank: number;
  @Input('file')
  private file: string;
  @Input('isBlank')
  private isBlank = false;
  private piecePath = 'queen-d.png';

  constructor() {
  }

  ngOnInit() {
  }

}
