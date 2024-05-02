import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { TicketCartComponent } from './components/ticket-cart/ticket-cart.component';

const routes: Routes = [
  { path:'', redirectTo:"newticket",pathMatch:'full'},
  { path:'newticket', component: NewTicketComponent},
  { path:'ticketcart', component: TicketCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
