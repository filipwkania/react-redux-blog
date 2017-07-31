import { actionTypes } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case actionTypes.FETCH_POST:
      return { ...state, [action.payload.data.id] : action.payload.data};
    case actionTypes.DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}