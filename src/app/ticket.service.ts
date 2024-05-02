import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  private url = 'https://freeapi.miniprojectideas.com/api/youtube/AddNewTicket';


  constructor(private http: HttpClient) { }

  fetchTicket(newTicket: Ticket) : Observable<any>{
      
     return this.http.post(this.url,newTicket)
  }

  get() : Observable<any> {
    return this.http.get("https://freeapi.miniprojectideas.com/api/youtube/GetTodaysTickets");
  }

}
