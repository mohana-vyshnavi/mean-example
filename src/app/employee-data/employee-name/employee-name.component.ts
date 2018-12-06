import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.css']
})
export class EmployeeNameComponent implements OnInit {

  /*** Variable declaration ***/
  @Input('name') name: string;

  /*** constructor ***/
  constructor() { }

  /*** OnInit ***/
  ngOnInit() {
  }
}
