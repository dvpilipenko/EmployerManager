import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../store/reducer';
import { selectTags } from '../../../store/selector';
import { deleteTag, saveTag } from '../../../store/action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tags-dialog',
  templateUrl: './tags-dialog.component.html',
  styleUrls: ['./tags-dialog.component.scss'],
})
export class TagsDialogComponent implements OnInit {
  constructor(private store: Store<State>, private formBuilder: FormBuilder) {}

  tags$ = this.store.select(selectTags);
  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      value: ['', [Validators.required]],
    });
  }

  addTag() {
    if (this.formGroup.valid) {
      this.store.dispatch(saveTag({ tag: this.formGroup.value }));
    }
  }

  deleteTag(id: string) {
    this.store.dispatch(deleteTag({ id }));
  }
}
