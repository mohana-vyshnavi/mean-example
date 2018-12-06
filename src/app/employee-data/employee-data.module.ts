
/*** Angular Imports ***/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*** Material Imports ***/
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material';

/*** Custom Imports ***/
import { EmployeeDataRoutingModule } from './employee-data-routing.module';
import { EmployeeDataComponent } from './employee-data.component';
import { EmployeeNameComponent } from './employee-name/employee-name.component';
import { EmployeeDesignationComponent } from './employee-designation/employee-designation.component';
import { EmployeeIdComponent } from './employee-id/employee-id.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { EmployeePersonalDetailsComponent } from './employee-personal-details/employee-personal-details.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeDataRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, 
  ],
  declarations: [
    EmployeeDataComponent,
    EmployeeNameComponent,
    EmployeeDesignationComponent,
    EmployeeIdComponent,
    EmployeeSalaryComponent,
    EmployeePersonalDetailsComponent
  ]
})
export class EmployeeDataModule { }
