import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { selectOffices } from '../../../store/selector';
import { State } from '../../../store/reducer';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getEmployees, setSearchSetting } from '../../../store/action';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPanelComponent implements OnInit {
  constructor(private store: Store<State>, private formBuilder: FormBuilder) {}
  offices$ = this.store.select(selectOffices);
  formGroup: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      name: [''],
      office: [''],
    });
  }

  search() {
    this.store.dispatch(setSearchSetting({ setting: this.formGroup.value }));
    this.store.dispatch(getEmployees());
  }

  clear() {
    this.initForm();
    this.store.dispatch(setSearchSetting({ setting: this.formGroup.value }));
    this.store.dispatch(getEmployees());
  }
}
