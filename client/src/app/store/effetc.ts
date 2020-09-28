import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from './reducer';
import {
  changePageSetting,
  deleteEmployee,
  deleteTag,
  getEmployees,
  getEmployeesSuccess,
  getTags,
  getTagsSuccess,
  saveEmployee,
  saveTag,
  updateEmployee,
} from './action';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { IEmployeeResponse, Tags } from '@models/models';
import { selectPageSetting, selectSearchSetting } from './selector';
import { environment } from '../../environments/environment';

@Injectable()
export class EmployeeEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<State>
  ) {}

  tagPath = 'tag';
  employeePath = 'employee';

  changePageSetting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changePageSetting),
      map(() => getEmployees())
    )
  );

  loadTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTags),
      switchMap(() =>
        this.http
          .get(`${environment.apiBaseUrl}/${this.tagPath}/`, {
            responseType: 'json',
          })
          .pipe(
            map((tags: Tags[]) => {
              return getTagsSuccess({ tags });
            })
          )
      )
    )
  );

  saveEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveEmployee),
      switchMap((action) => {
        return this.http
          .post(`${environment.apiBaseUrl}/${this.employeePath}/`, {
            ...action.employee,
          })
          .pipe(
            map((data) => {
              return getEmployees();
            })
          );
      })
    )
  );

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEmployee),
      switchMap((action) => {
        return this.http
          .put(`${environment.apiBaseUrl}/${this.employeePath}/`, {
            ...action.employee,
          })
          .pipe(
            map((data) => {
              return getEmployees();
            })
          );
      })
    )
  );

  deleteEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEmployee),
      switchMap((action) => {
        return this.http
          .delete(`${environment.apiBaseUrl}/${this.employeePath}/${action.id}`)
          .pipe(
            map((data) => {
              return getEmployees();
            })
          );
      })
    )
  );

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEmployees),
      withLatestFrom(this.store.select(selectPageSetting)),
      withLatestFrom(this.store.select(selectSearchSetting)),
      switchMap(([[_, pageSetting], searchSetting]) => {
        return this.http
          .get(
            `${environment.apiBaseUrl}/${this.employeePath}/${pageSetting.page}/${pageSetting.limit}`,
            {
              responseType: 'json',
              params: searchSetting,
            }
          )
          .pipe(
            map((response: IEmployeeResponse) => {
              return getEmployeesSuccess({ response });
            })
          );
      })
    )
  );

  saveTag$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveTag),
      switchMap((action) => {
        return this.http
          .post(`${environment.apiBaseUrl}/${this.tagPath}/`, { ...action.tag })
          .pipe(
            map((data) => {
              return getTags();
            })
          );
      })
    )
  );

  deleteTag$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTag),
      switchMap((action) => {
        return this.http
          .delete(`${environment.apiBaseUrl}/${this.tagPath}/${action.id}`)
          .pipe(
            map((data) => {
              return getTags();
            })
          );
      })
    )
  );
}
