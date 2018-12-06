
/*** Angular Imports ***/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*** Material Imports ***/
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  MatSortModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { MatInputModule } from '@angular/material/input';

/*** Custom Imports ***/
import { EmployeeDataRoutingModule } from './employee-data-routing.module';
import { EmployeeDataComponent } from './employee-data.component';
import { EmployeeNameComponent } from './employee-name/employee-name.component';
import { EmployeeDesignationComponent } from './employee-designation/employee-designation.component';
import { EmployeeIdComponent } from './employee-id/employee-id.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { EmployeePersonalDetailsComponent } from './employee-personal-details/employee-personal-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // Angular provided modules
    CommonModule,
    FormsModule,

    // Matrial provided modules
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,

    // User created modules
    EmployeeDataRoutingModule,
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
