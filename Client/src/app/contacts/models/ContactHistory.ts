export interface ContactHistory{
  date?: Date,
  description?: string,
  invoiceLines?: [{
    amount?:number,
    itemDescription?: string
  }]
}

