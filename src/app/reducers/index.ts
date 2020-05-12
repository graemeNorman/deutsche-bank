import { ActionTypes, DeutscheBankActions } from '../actions/actions';
import { State } from '../models/models';
import { tassign } from 'tassign';

export const initialState: State = {
  selectedRegion: { name: '' },
  selectedCountry: { name: '' },
  europeanCountries: [],
  asianCountries: []
};

export function reducer(state: State = initialState, action: DeutscheBankActions) {

  switch (action.type) {

    case ActionTypes.SELECTED_REGION:
      return tassign(state, {
        selectedRegion: action.payload
      });

    case ActionTypes.SELECTED_COUNTRY:
      return tassign(state, {
        selectedCountry: action.payload
      });

    case ActionTypes.AVAILABLE_COUNTRIES:
      if (action.payload.region === 'Europe') {
        return tassign(state, {
          europeanCountries: action.payload
        });
      }
      if (action.payload.region === 'Asia') {
        return tassign(state, {
          asianCountries: action.payload
        });
      }
      break;

    default:
      return state;
  }
}
