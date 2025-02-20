import {Component, inject, OnInit} from '@angular/core';
import {allData} from "../../data/data";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  totalData = allData
  customerData = new Array();
  filteredData = new Array();
  loanNames = new Array();

  constructor(){

  }



  ngOnInit(): void {
     this.loadData();
    this.filterLoans();
    this.Names();
  }


  loadData(){
    console.log("total data:",this.totalData);
    this.totalData.forEach((val)=> {
      this.customerData = val?.customerLoanDtoList;
    });
  }

  filterLoans(): void {
    const filterData = this.customerData.filter(value => value.documentStatus === 'PENDING');
    console.log(filterData);
    this.filteredData = filterData;
  }

  Names(): void{
    const loanNames = this.customerData.filter(loan => loan.name==='HOME LOAN');
    console.log(loanNames);
    this.loanNames = loanNames;
  }
}
