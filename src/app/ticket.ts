
export interface Ticket {
    ticketId: number;
    customerName: string;
    mobileNo: string;
    email: string;
    city: string;
    state: string;
    pincode: string;
    reference: string;
    adultCount: number;
    childCount: number;
    adultRate: number;
    childRate: number;
    totalAmount: number;
    discountInPercent: number;
    finalAmount: number;
    ticketDate: Date;
    ticketNo: string;
  }
  