import {actionTypes} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER:
      return [ action.payload.data, ...state ];
    default:
      break;
  }
  return state;
}