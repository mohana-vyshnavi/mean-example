import { Component, OnInit, Input, ElementRef, Output } from '@angular/core';

@Component({
  selector: 'app-employee-id',
  templateUrl: './employee-id.component.html',
  styleUrls: ['./employee-id.component.css']
})
export class EmployeeIdComponent implements OnInit {
  /*** Variable declaration ***/
  @Input('id') id: number;
  
  /*** constructor ***/
  constructor() { }

  /*** OnInit ***/
  ngOnInit() {
  }

}
