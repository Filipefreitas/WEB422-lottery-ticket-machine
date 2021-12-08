import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cash-buttons',
  templateUrl: './cash-buttons.component.html',
  styleUrls: ['./cash-buttons.component.css']
})
export class CashButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dollarNotes:number[] = [1, 5, 10, 20];
  betAmount:number = 0;

  @Output() totalBetAmount : EventEmitter<number> = new EventEmitter();
  
  public setBetAmount(dollarNote:number)
  {
    this.betAmount += dollarNote;
    this.totalBetAmount.emit(this.betAmount);

    //for testing purposes
    //console.log(this.betAmount);
  }
}
