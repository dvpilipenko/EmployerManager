import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDialogComponent } from './employee-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initialState } from '../../../store/reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

describe('EmployeeDialogComponent', () => {
  let component: EmployeeDialogComponent;
  let fixture: ComponentFixture<EmployeeDialogComponent>;
  const mockState = {
    employee: initialState,
  };
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        MatDialogModule,
      ],
      declarations: [EmployeeDialogComponent],
      providers: [
        provideMockStore({ initialState: mockState }),
        {
          provide: MatDialogRef,
          useValue: {},
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
