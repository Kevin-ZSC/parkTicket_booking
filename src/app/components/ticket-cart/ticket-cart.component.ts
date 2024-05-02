import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../ticket.service';

@Component({
  selector: 'app-ticket-cart',
  templateUrl: './ticket-cart.component.html',
  styleUrl: './ticket-cart.component.css'
})
export class TicketCartComponent implements OnInit{
  tickets: any[] = [];
  isTileView: boolean = true;
  isToday: boolean = true;
  constructor(private ticketService:TicketService) {}

  ngOnInit(): void {
    this.getAllTickets()
  }

  toggleTicket() {
    this.isToday = !this.isToday;
    if(this.isToday) {
      this.getTodayTickets()
    } else {
      this.getAllTickets()
    }
  }

  getAllTickets () {
    this.ticketService.get()
      .subscribe((res:any)=>{
       this.tickets = res.data;
      })
  }

  getTodayTickets () {
    this.ticketService.get()
      .subscribe((res:any)=>{
       this.tickets = res.data;
      })
  }
}
