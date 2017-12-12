// @flow
import moment from 'moment';
import { REHYDRATE } from 'redux-persist/constants';
import { CREATE_POST, DELETE_POST } from '../actions/PostActions';

const initalState = [];

function reduce(state: Array<Object> = initalState, action: Object) {
  switch (action.type) {
    case REHYDRATE:
      return [...(action.payload.posts || [])];

    case CREATE_POST:
      const model = {
        ...action.model,
        id: action.id,
        date: moment().format('YYYY-MM-DD HH:mm')
      };
      return [...state, model];

    case DELETE_POST:
      return state.filter(post => post.id !== action.id);

    default:
      return [...state];
  }
}

export default reduce;
