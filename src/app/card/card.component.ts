import { Component, OnInit, Input } from '@angular/core';
import { CheckoutService } from '../checkout/checkout.service'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  constructor(private checkoutService: CheckoutService) {   }

  ngOnInit(): void {
  }
  
  openModal(id: string) {
    this.checkoutService.open(id);
}

closeModal(id: string) {
    this.checkoutService.close(id);
}

  numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  isSelected:boolean = false;
  //isCompleted:boolean = false;
  selectedNumbers: number[] = [];
  @Input() finalAmount:number = 0;

  selectNumber(clickedNum:number)
  {
    if(this.selectedNumbers.includes(clickedNum))
    {
      for(let i = 0; i < this.selectedNumbers.length; i++)
      {
        if(this.selectedNumbers[i] === clickedNum)
        {
          this.selectedNumbers.splice(i, 1);
        }
      }
    }
    else if(this.selectedNumbers.length === 5)
    {
      window.alert(`Maximun numbers already selected`);
    }
    else
    {
      this.selectedNumbers.push(clickedNum);
    }

    //for testing purposes
    //console.log(this.selectedNumbers);
  }

  selected(clickedNum:number): boolean
  {
    this.isSelected = false;
    if(this.selectedNumbers.includes(clickedNum))
    {
      this.isSelected = true;
    }
    return this.isSelected;
  }

  clear()
  {
    if(this.selectedNumbers.length === 5)
    {
      this.selectedNumbers = [];
      this.finalAmount = 0;
      //this.isCompleted = false;
    }
    else
    {
      window.alert(`You can only clear after selecting all numbers`);
    }
  }
}
