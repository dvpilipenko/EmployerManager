import { createReducer, on } from '@ngrx/store';
import {
  changePageSetting,
  getEmployees,
  getEmployeesSuccess,
  getTags,
  getTagsSuccess,
  setSearchSetting,
} from './action';
import { Employee, PageSetting, QueryParams, Tags } from '@models/models';

export const employeeFeatureKey = 'employee';

export interface State {
  employees: Employee[];
  tags: Tags[];
  offices: string[];
  pageSetting: PageSetting;
  searchSetting: QueryParams;
  isLoadingCount: number;
}

export const initialState: State = {
  employees: [],
  tags: [],
  offices: ['Riga', 'Tallinn', 'Vilnius'],
  pageSetting: { page: 0, limit: 5, count: 0 },
  isLoadingCount: 0,
  searchSetting: { name: '', office: '' },
};
export const employeeReducer = createReducer(
  initialState,
  on(setSearchSetting, (state, action) => {
    return {
      ...state,
      searchSetting: action.setting,
      pageSetting: { ...state.pageSetting, page: 0 },
    };
  }),
  on(getTags, (state, action) => {
    return {
      ...state,
      isLoadingCount: state.isLoadingCount + 1,
    };
  }),
  on(getTagsSuccess, (state, action) => {
    return {
      ...state,
      tags: action.tags,
      isLoadingCount: state.isLoadingCount - 1,
    };
  }),
  on(changePageSetting, (state, action) => {
    return {
      ...state,
      pageSetting: {
        ...state.pageSetting,
        limit: action.limit,
        page: action.page,
      },
    };
  }),
  on(getEmployees, (state, action) => {
    return {
      ...state,
      isLoadingCount: state.isLoadingCount + 1,
    };
  }),
  on(getEmployeesSuccess, (state, action) => {
    return {
      ...state,
      isLoadingCount: state.isLoadingCount - 1,
      employees: action.response.data,
      pageSetting: { ...state.pageSetting, count: action.response.count },
    };
  })
);
