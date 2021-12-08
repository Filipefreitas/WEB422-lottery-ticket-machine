import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../modal/modal.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  constructor(private checkoutService: ModalService) {   }

  ngOnInit(): void {
  }
  
  openModal(id: string) 
  {
    this.checkoutService.open(id);
  }

  closeModal(id: string) 
  {
    this.checkoutService.close(id);
  }

  numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  padNumbers:string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  isSelected:boolean = false;
  isFull:boolean = false;
  selectedNumbers: number[] = [];
  @Input() finalAmount:number = 0;
  selectedAmount:string = "";
  amountReceived:number = 0;
  change:number = 0;
  acceptFloatingPoint:boolean = true;

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
    else if(this.isFull)
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
    if(this.isFull)
    {
      this.selectedNumbers = [];
      this.isFull = false;
      this.acceptFloatingPoint = true;
      this.finalAmount = 0;
      this.amountReceived = 0;
      this.change = 0;
    }
    else
    {
      window.alert(`You can only clear after selecting all numbers`);
    }
  }

  received(amtReceived:string)
  {
    this.selectedAmount = this.selectedAmount + amtReceived;

    if(this.acceptFloatingPoint && amtReceived === "." )
    {
      this.acceptFloatingPoint = false;
    }
    else if(amtReceived === ".")
    {
      window.alert(`Floating point has already been added`);
    }
    else
    {
      this.amountReceived = parseFloat(this.selectedAmount);
      if(this.amountReceived > this.finalAmount)
      {
        this.change =  this.amountReceived - this.finalAmount;
      }
    }
  }
  
  clearReceivedAmount()
  {
      this.selectedAmount = "";
      this.amountReceived = 0;
      this.change = 0;
  }

  checkFull():boolean
  {
    if(this.selectedNumbers.length === 5)
    {
      this.isFull = true;
    }
    return this.isFull;
  }

  goToCheckout()
  {
    {
      if(!this.isFull)
      {
        window.alert(`You must select five numbers before proceeding to checkout`);
      }
      else if(this.finalAmount === 0)
      {
        window.alert(`You must select a betting amount before procceding to checkout`);
      }
      else
      {
        this.openModal('checkout-modal');
      }
    }
  }
  
  generateTicket()
  {
    if(this.amountReceived < this.finalAmount)
    {
      window.alert(`Payment has not been completed yet`);
    }
    else
    {
      this.selectedNumbers.sort((n1,n2) => n1 - n2);
      this.closeModal('checkout-modal');
      this.openModal('receipt-modal');
    }
  }

}
