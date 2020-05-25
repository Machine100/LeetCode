import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rivers',
  templateUrl: './rivers.component.html',
  styleUrls: ['./rivers.component.scss']
})
export class RiversComponent implements OnInit {

  constructor() { }

  matrix: number[][]
  matrixExplored: number[][]

  ngOnInit(): void {
  }

  findRivers() {
    console.log('ttjtjtj')
  }

}
