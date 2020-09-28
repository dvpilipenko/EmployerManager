import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../material.module';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TagsDialogComponent } from './tags-dialog/tags-dialog.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeDialogComponent, TagsDialogComponent, SearchPanelComponent],
  exports: [
    EmployeeListComponent,
    FormsModule
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule,
    MaterialModule
  ]
})
export class EmployerManagerModule { }
