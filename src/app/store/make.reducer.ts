import { createReducer, on } from '@ngrx/store';
import {
  getAllMakes,
  getMakeDetailsModels,
  getMakeDetailsTypes,
  setParamSearch,
  setMake,
} from './make.actions';
import { MakeState } from '../models';

export const initialState: MakeState = {
  makes: [],
  makeSelectedModels: [],
  makeSelectedTypes: [],
  paramSearch: '',
  make: '',
};

export const makeReducer = createReducer(
  initialState,
  on(getAllMakes, (state, { makes }) => ({
    ...state,
    makes,
  })),

  on(getMakeDetailsModels, (state, { makeSelect }) => ({
    ...state,
    makeSelectedModels: makeSelect,
  })),

  on(getMakeDetailsTypes, (state, { makeSelect }) => ({
    ...state,
    makeSelectedTypes: makeSelect,
  })),

  on(setParamSearch, (state, { param }) => ({
    ...state,
    paramSearch: param,
  })),

  on(setMake, (state, { make }) => ({
    ...state,
    make: make,
  }))
);
