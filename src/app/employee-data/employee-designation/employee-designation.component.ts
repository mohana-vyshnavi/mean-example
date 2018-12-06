import { Component, OnInit, Input, ElementRef, Output } from '@angular/core';

@Component({
  selector: 'app-employee-designation',
  templateUrl: './employee-designation.component.html',
  styleUrls: ['./employee-designation.component.css']
})
export class EmployeeDesignationComponent implements OnInit {

  /*** Variable declaration ***/
  @Input('designation') designation: string;

  /*** constructor ***/
  constructor() { }

  /*** OnInit ***/
  ngOnInit() {
  }

}
