import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../ticket';
import { TicketService } from '../../ticket.service';


@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit{
  newTicketObj: Ticket= {
    ticketId: 0,
    customerName: '',
    mobileNo: '',
    email: '',
    city: '',
    state: '',
    pincode: '',
    reference: '',
    adultCount: 0,
    childCount: 0,
    adultRate: 0,
    childRate: 0,
    totalAmount: 0,
    discountInPercent: 0,
    finalAmount: 0,
    ticketDate: new Date(),
    ticketNo: ''
  };

isOtherSelected: boolean = false;
otherRef : string = '';

  constructor(private ticketService: TicketService){}

  fetchTickets(){
    
    if(this.isOtherSelected) {
      this.newTicketObj.reference = this.otherRef;
    }
    this.ticketService.fetchTicket(this.newTicketObj)
      .subscribe((res:any )=> {
        if(res.result) {
          console.log('ticket is success')
        } else {
          console.log(res.message)
        }
      })
  }
  
  ngOnInit(): void {
    this.fetchTickets();
  }
  
  changeRef() {
    if(this.newTicketObj.reference == 'other') {
      this.isOtherSelected = true;
      
    } else {
      this.isOtherSelected = false;
    }
  }
  
  calTotal() {
    const totalAmount = (this.newTicketObj.adultRate * this.newTicketObj.adultCount) + (this.newTicketObj.childRate * this.newTicketObj.childCount);
    this.newTicketObj.totalAmount = totalAmount;

    const discountAmount = totalAmount * this.newTicketObj.discountInPercent / 100;

    this.newTicketObj.finalAmount = this.newTicketObj.totalAmount - discountAmount;
  }
}
