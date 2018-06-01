import {InvoiceLine} from "./InvoiceLine";

export interface ContactHistory{
  date?: Date,
  description?: string,
  invoiceLines?: [InvoiceLine]

}

