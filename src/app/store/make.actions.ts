import { createAction, props } from '@ngrx/store';
import { Make, MakeModels, MakeTypes } from '../models';

export const getAllMakes = createAction(
  '[Get All Makes]',
  props<{ makes: Make[] }>()
);
export const getMakeDetailsModels = createAction(
  '[Get Make Details Models]',
  props<{ makeSelect: MakeModels[] }>()
);
export const setParamSearch = createAction(
  '[Set Param Search]',
  props<{ param: string }>()
);
export const getMakeDetailsTypes = createAction(
  '[Get Make Details Types]',
  props<{ makeSelect: MakeTypes[] }>()
);
export const setMake = createAction('[Get Make]', props<{ make: string }>());
