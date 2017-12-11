// @flow
import moment from 'moment';
import { REHYDRATE } from 'redux-persist/constants';
import { CREATE_COMMENT } from '../actions/CommentActions';
import uuid from '../../util/Uuid';

const initalState = [];

function reduce(state: Array<Object> = initalState, action: Object) {
  switch (action.type) {
    case REHYDRATE:
      return [...(action.payload.comments || [])];

    case CREATE_COMMENT:
      const model = {
        text: action.text,
        id: uuid(),
        postId: action.postId,
        date: moment().format('YYYY-MM-DD HH:mm')
      };
      return [...state, model];

    default:
      return [...state];
  }
}

export default reduce;
