import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {InvoiceLine} from "../contacts/models/InvoiceLine";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  dataSource = new MatTableDataSource<InvoiceLine>(tableData);
  displayedColumns = ['amount','itemDescription','delete'];

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){

  }

  /**
   * add a new invoice line
   *
   */
  addInvoiceLine(){
    tableData.push({
      amount:0,
      itemDescription: 'Number two'
    });
    this.dataSource.data = tableData;



  }
  deleteItem(invoiceLine:InvoiceLine){

  }

}


const tableData: InvoiceLine[]=[{
  amount: 100,
  itemDescription: 'line 1'

},
  {
    amount: 200,
    itemDescription: 'line 2'

  },
  {
    amount: 300,
    itemDescription: 'line 3'

  }];

