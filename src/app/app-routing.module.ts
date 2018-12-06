import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeDataModule } from './employee-data';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'EmployeeData',
                loadChildren: () => EmployeeDataModule
            },
            {
                path: '',
                redirectTo: 'EmployeeData',
                pathMatch: 'full'
            }
        ])
    ]
})
export class AppRoutingModule { }
