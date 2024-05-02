import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-cart',
  templateUrl: './ticket-cart.component.html',
  styleUrl: './ticket-cart.component.css'
})
export class TicketCartComponent implements OnInit{
  tickets: any[] = [];
  isTileView: boolean = true;
  isToday: boolean = true;
  constructor(private http:HttpClient) {}

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
    this.http.get("https://freeapi.miniprojectideas.com/api/youtube/GetAllTickets")
      .subscribe((res:any)=>{
       this.tickets = res.data;
      })
  }

  getTodayTickets () {
    this.http.get("https://freeapi.miniprojectideas.com/api/youtube/GetTodaysTickets")
      .subscribe((res:any)=>{
       this.tickets = res.data;
      })
  }
}
