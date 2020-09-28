import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsDialogComponent } from './tags-dialog.component';
import { initialState } from '../../../store/reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TagsDialogComponent', () => {
  let component: TagsDialogComponent;
  let fixture: ComponentFixture<TagsDialogComponent>;
  const mockState = {
    employee: initialState,
  };
  let store: MockStore;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [TagsDialogComponent],
      providers: [provideMockStore({ initialState: mockState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
