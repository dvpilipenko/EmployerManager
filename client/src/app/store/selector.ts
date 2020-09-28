import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, employeeFeatureKey } from './reducer';

export const selectEmployeeState = createFeatureSelector<State>(
  employeeFeatureKey
);

export const selectEmployees = createSelector(
  selectEmployeeState,
  (state) => state.employees
);

export const selectPageSetting = createSelector(
  selectEmployeeState,
  (state) => state.pageSetting
);

export const selectIsLoading = createSelector(
  selectEmployeeState,
  (state) => state.isLoadingCount
);

export const selectTags = createSelector(
  selectEmployeeState,
  (state) => state.tags
);

export const selectOffices = createSelector(
  selectEmployeeState,
  (state) => state.offices
);

export const selectSearchSetting = createSelector(
  selectEmployeeState,
  (state) => state.searchSetting
);
