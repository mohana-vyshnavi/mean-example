import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeDataModule } from './employee-data';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'EmployeeData',
                loadChildren: () => EmployeeDataModule
            }
        ])
    ]
})
export class AppRoutingModule { }
