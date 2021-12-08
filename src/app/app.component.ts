import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lottery-ticket-machine';
  @Input() totalBetAmount:number = 0;
  
  receiveBetAmount(totalAmount:number)
  {
    this.totalBetAmount = totalAmount;

    //for testing purposes
    //console.log(totalAmount);
  }
}