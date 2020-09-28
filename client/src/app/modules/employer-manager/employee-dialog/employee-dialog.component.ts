import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { State } from '../../../store/reducer';
import { selectOffices, selectTags } from '../../../store/selector';
import {
  deleteEmployee,
  saveEmployee,
  updateEmployee,
} from '../../../store/action';
import {Employee} from '@models/models';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.scss'],
})
export class EmployeeDialogComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    private store: Store<State>,
    private dialogRef: MatDialogRef<EmployeeDialogComponent>
  ) {}

  formGroup: FormGroup;
  offices$ = this.store.select(selectOffices);
  tags$ = this.store.select(selectTags);

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      _id: [this.data?._id],
      firstName: [this.data?.firstName, [Validators.required]],
      lastName: [this.data?.lastName, [Validators.required]],
      office: [this.data?.office, [Validators.required]],
      birthDate: [this.data?.birthDate, [Validators.required]],
      phone: [this.data?.phone, [Validators.required]],
      tags: [this.data?.tags, []],
    });
  }

  saveEmployee() {
    console.log(this.formGroup.value);
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.store.dispatch(
        this.data?._id
          ? updateEmployee({ employee: this.formGroup.value })
          : saveEmployee({ employee: this.formGroup.value })
      );
      this.dialogRef.close();
    }
  }

  deleteEmployee() {
    this.store.dispatch(deleteEmployee({ id: this.data._id }));
    this.dialogRef.close();
  }
}
