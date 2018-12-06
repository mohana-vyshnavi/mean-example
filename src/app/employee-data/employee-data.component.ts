import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  id: number;
  designation: number;
  salary: string;
  personal_details: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', designation: 1.0079, salary: 'H', personal_details: 'Hydrogen' },
  { id: 2, name: 'Helium', designation: 4.0026, salary: 'He', personal_details: 'Hydrogen' },
  { id: 3, name: 'Lithium', designation: 6.941, salary: 'Li', personal_details: 'Hydrogen' },
  { id: 4, name: 'Beryllium', designation: 9.0122, salary: 'Be', personal_details: 'Hydrogen' },
  { id: 5, name: 'Boron', designation: 10.811, salary: 'B', personal_details: 'Hydrogen' },
  { id: 6, name: 'Carbon', designation: 12.0107, salary: 'C', personal_details: 'Hydrogen' },
  { id: 7, name: 'Nitrogen', designation: 14.0067, salary: 'N', personal_details: 'Hydrogen' },
  { id: 8, name: 'Oxygen', designation: 15.9994, salary: 'O', personal_details: 'Hydrogen' },
  { id: 9, name: 'Fluorine', designation: 18.9984, salary: 'F', personal_details: 'Hydrogen' },
  { id: 10, name: 'Neon', designation: 20.1797, salary: 'Ne', personal_details: 'Hydrogen' },
  { id: 11, name: 'Hydrogen', designation: 1.0079, salary: 'H', personal_details: 'Hydrogen' },
  { id: 12, name: 'Helium', designation: 4.0026, salary: 'He', personal_details: 'Hydrogen' },
  { id: 13, name: 'Lithium', designation: 6.941, salary: 'Li', personal_details: 'Hydrogen' },
  { id: 14, name: 'Beryllium', designation: 9.0122, salary: 'Be', personal_details: 'Hydrogen' },
  { id: 15, name: 'Boron', designation: 10.811, salary: 'B', personal_details: 'Hydrogen' },
  { id: 16, name: 'Carbon', designation: 12.0107, salary: 'C', personal_details: 'Hydrogen' },
  { id: 17, name: 'Nitrogen', designation: 14.0067, salary: 'N', personal_details: 'Hydrogen' },
  { id: 18, name: 'Oxygen', designation: 15.9994, salary: 'O', personal_details: 'Hydrogen' },
  { id: 19, name: 'Fluorine', designation: 18.9984, salary: 'F', personal_details: 'Hydrogen' },
  { id: 20, name: 'Neon', designation: 20.1797, salary: 'Ne', personal_details: 'Hydrogen' },
  { id: 21, name: 'Hydrogen', designation: 1.0079, salary: 'H', personal_details: 'Hydrogen' },
  { id: 22, name: 'Helium', designation: 4.0026, salary: 'He', personal_details: 'Hydrogen' },
  { id: 23, name: 'Lithium', designation: 6.941, salary: 'Li', personal_details: 'Hydrogen' },
  { id: 24, name: 'Beryllium', designation: 9.0122, salary: 'Be', personal_details: 'Hydrogen' },
  { id: 25, name: 'Boron', designation: 10.811, salary: 'B', personal_details: 'Hydrogen' },
  { id: 26, name: 'Carbon', designation: 12.0107, salary: 'C', personal_details: 'Hydrogen' },
  { id: 27, name: 'Nitrogen', designation: 14.0067, salary: 'N', personal_details: 'Hydrogen' },
  { id: 28, name: 'Oxygen', designation: 15.9994, salary: 'O', personal_details: 'Hydrogen' },
  { id: 29, name: 'Fluorine', designation: 18.9984, salary: 'F', personal_details: 'Hydrogen' },
  { id: 30, name: 'Neon', designation: 20.1797, salary: 'Ne', personal_details: 'Hydrogen' },
  { id: 31, name: 'Hydrogen', designation: 1.0079, salary: 'H', personal_details: 'Hydrogen' },
  { id: 32, name: 'Helium', designation: 4.0026, salary: 'He', personal_details: 'Hydrogen' },
  { id: 33, name: 'Lithium', designation: 6.941, salary: 'Li', personal_details: 'Hydrogen' },
  { id: 34, name: 'Beryllium', designation: 9.0122, salary: 'Be', personal_details: 'Hydrogen' },
  { id: 35, name: 'Boron', designation: 10.811, salary: 'B', personal_details: 'Hydrogen' },
  { id: 36, name: 'Carbon', designation: 12.0107, salary: 'C', personal_details: 'Hydrogen' },
  { id: 37, name: 'Nitrogen', designation: 14.0067, salary: 'N', personal_details: 'Hydrogen' },
  { id: 38, name: 'Oxygen', designation: 15.9994, salary: 'O', personal_details: 'Hydrogen' },
  { id: 39, name: 'Fluorine', designation: 18.9984, salary: 'F', personal_details: 'Hydrogen' },
  { id: 40, name: 'Neon', designation: 20.1797, salary: 'Ne', personal_details: 'Hydrogen' },
  { id: 41, name: 'Hydrogen', designation: 1.0079, salary: 'H', personal_details: 'Hydrogen' },
  { id: 42, name: 'Helium', designation: 4.0026, salary: 'He', personal_details: 'Hydrogen' },
  { id: 43, name: 'Lithium', designation: 6.941, salary: 'Li', personal_details: 'Hydrogen' },
  { id: 44, name: 'Beryllium', designation: 9.0122, salary: 'Be', personal_details: 'Hydrogen' },
  { id: 45, name: 'Boron', designation: 10.811, salary: 'B', personal_details: 'Hydrogen' },
  { id: 46, name: 'Carbon', designation: 12.0107, salary: 'C', personal_details: 'Hydrogen' },
  { id: 47, name: 'Nitrogen', designation: 14.0067, salary: 'N', personal_details: 'Hydrogen' },
  { id: 48, name: 'Oxygen', designation: 15.9994, salary: 'O', personal_details: 'Hydrogen' },
  { id: 49, name: 'Fluorine', designation: 18.9984, salary: 'F', personal_details: 'Hydrogen' },
  { id: 50, name: 'Neon', designation: 20.1797, salary: 'Ne', personal_details: 'Hydrogen' },
];

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['id', 'name', 'designation', 'salary', 'personal_details'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
