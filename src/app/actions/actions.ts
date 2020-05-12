import { Action } from '@ngrx/store';

export enum ActionTypes {
  SELECTED_REGION = 'SELECTED_REGION',
  AVAILABLE_COUNTRIES = 'AVAILABLE_COUNTRIES',
  SELECTED_COUNTRY = 'SELECTED_COUNTRY'
}

export class SelectedRegion implements Action {
  readonly type = ActionTypes.SELECTED_REGION;
  constructor(public payload: any) {}
}

export class AvailableCountries implements Action {
  readonly type = ActionTypes.AVAILABLE_COUNTRIES;
  constructor(public payload: any) {}
}

export class SelectedCountry implements Action {
  readonly type = ActionTypes.SELECTED_COUNTRY;
  constructor(public payload: any) {}
}

export type DeutscheBankActions = SelectedRegion | SelectedCountry | AvailableCountries;
