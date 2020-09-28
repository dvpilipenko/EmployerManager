import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../store/reducer';
import { selectEmployees, selectPageSetting } from '../../../store/selector';
import {
  changePageSetting,
  getEmployees,
  getTags,
  setSearchSetting,
} from '../../../store/action';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';
import { TagsDialogComponent } from '../tags-dialog/tags-dialog.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent implements OnInit {
  constructor(private store: Store<State>, public dialog: MatDialog) {}
  employees$ = this.store.select(selectEmployees);
  pageSetting$ = this.store.select(selectPageSetting);
  isShowSearchPanel: boolean;

  displayedColumns: string[] = ['name', 'office', 'birthDate', 'phone', 'tags'];
  title = 'client';

  sortData(sort: Sort) {
    console.log(sort);
  }

  addEmployee() {
    this.dialog.open(EmployeeDialogComponent);
  }

  changePage(event: PageEvent) {
    this.store.dispatch(
      changePageSetting({ page: event.pageIndex, limit: event.pageSize })
    );
  }

  changeVisibilitySearchPanel() {
    this.store.dispatch(
      setSearchSetting({ setting: { office: '', name: '' } })
    );
    this.isShowSearchPanel = !this.isShowSearchPanel;
  }

  ngOnInit(): void {
    this.isShowSearchPanel = false;
    this.store.dispatch(getEmployees());
    this.store.dispatch(getTags());
  }

  rowClick(row) {
    this.dialog.open(EmployeeDialogComponent, { data: row });
  }

  editTags() {
    this.dialog.open(TagsDialogComponent);
  }
}
