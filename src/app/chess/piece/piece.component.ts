import {Component, Input, OnInit} from '@angular/core';
import {PieceModel} from './piece.model';
import {PieceRepo} from './piece.repo';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  @Input('rank')
  private rank: number;
  @Input('file')
  private file: string;

  private piece: PieceModel = new PieceModel();
  private imageHome = '../../../../assets/';
  private piecePath: string;

  constructor() {
  }

  ngOnInit() {
    this.piece.name = PieceRepo.repo[this.file + this.rank];
    this.piecePath = this.imageHome + this.piece.name + '.png';
  }

}
