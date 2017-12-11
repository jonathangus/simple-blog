// @flow
import moment from 'moment';
import { REHYDRATE } from 'redux-persist/constants';
import { CREATE_POST } from '../actions/PostActions';
import uuid from '../../util/Uuid';


const initalState = [];

function reduce(state: Array<Object> = initalState, action: Object) {
  switch (action.type) {
    case REHYDRATE:
      return [...(action.payload.posts || [])];

    case CREATE_POST:
      const model = {
        ...action.model,
        id: uuid(),
        date: moment().format('YYYY-MM-DD HH:mm')
      };
      return [...state, model];

    default:
      return [...state];
  }
}

export default reduce;
