import { createAction, props } from '@ngrx/store';
import {
  Employee,
  IEmployeeResponse,
  QueryParams,
  Tags,
} from '@models/models';

export const getEmployees = createAction('[Employee] Get Employees');

export const deleteTag = createAction(
  '[Tags] Delete Tags',
  props<{ id: string }>()
);

export const saveTag = createAction(
  '[Tags] Save Tags',
  props<{ tag: Tags }>()
);

export const deleteEmployee = createAction(
  '[Employee] Delete Employee',
  props<{ id: string }>()
);

export const saveEmployee = createAction(
  '[Employee] Save Employee',
  props<{ employee: Employee }>()
);

export const updateEmployee = createAction(
  '[Employee] Update Employee',
  props<{ employee: Employee }>()
);

export const setSearchSetting = createAction(
  '[Employee] Set Search setting',
  props<{ setting: QueryParams }>()
);

export const changePageSetting = createAction(
  '[Employee] Change Page Setting',
  props<{ page: number; limit: number }>()
);

export const getEmployeesSuccess = createAction(
  '[Employee] Get Employees Success',
  props<{ response: IEmployeeResponse }>()
);

export const getTags = createAction('[Tags] Get Tags');

export const getTagsSuccess = createAction(
  '[Tags] Get Tags Success',
  props<{ tags: Tags[] }>()
);
