import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MakeState } from '../models';

export const selectMakeState = createFeatureSelector<MakeState>('make');

export const selectAllMakes = createSelector(
  selectMakeState,
  (state: MakeState) => state.makes
);

export const selectFilterMakes = createSelector(
  selectMakeState,
  (state: MakeState) =>
    state.makes.filter((make) =>
      make.Make_Name.toLowerCase().includes(state.paramSearch.toLowerCase())
    )
);

export const selectMakeSelectedModels = createSelector(
  selectMakeState,
  (state: MakeState) => state.makeSelectedModels
);

export const selectMakeSelectedTypes = createSelector(
  selectMakeState,
  (state: MakeState) => state.makeSelectedTypes
);

export const selectParamSearch = createSelector(
  selectMakeState,
  (state: MakeState) => state.paramSearch
);

export const selectMake = createSelector(
  selectMakeState,
  (state: MakeState) => state.make
);
