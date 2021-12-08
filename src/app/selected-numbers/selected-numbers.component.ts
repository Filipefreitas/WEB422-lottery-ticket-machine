import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-numbers',
  templateUrl: './selected-numbers.component.html',
  styleUrls: ['./selected-numbers.component.css']
})

export class SelectedNumbersComponent implements OnInit 
{

  constructor() { }

  ngOnInit(): void {
  }

  @Input() myNumbers:number[] = [];
  @Input() finalAmount:number = 0;

}
