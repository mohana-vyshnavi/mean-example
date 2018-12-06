import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as Comp from '.';

const routes: Routes = [
  {
    path: '',
    component: Comp.EmployeeDataComponent,
    children: [
      {
        path: 'Employee-name/:type',
        component: Comp.EmployeeNameComponent
      }, {
        path: 'Employee-designation/:type',
        component: Comp.EmployeeDesignationComponent
      }, {
        path: 'Employee-ID/:type',
        component: Comp.EmployeeIdComponent
      }, {
        path: 'Employee-salary/:type',
        component: Comp.EmployeeSalaryComponent
      }, {
        path: 'Employee-personal-details/:type',
        component: Comp.EmployeePersonalDetailsComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDataRoutingModule { }
