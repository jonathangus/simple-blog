// @flow
import { createSelector } from 'reselect';
import moment from 'moment';

type Comment = {
  text: string,
  CommentId: string,
  date: string,
  id: string
};

export const getCommentsForPostSelector = createSelector(
  [state => state.comments, (state, postId) => postId],
  (comments: Array<Comment>, postId: string): Array<Comment> =>
    comments.filter(comment => comment.postId === postId)
);

export const getLatestCommentsSelector = createSelector(
  [state => state.comments, (state, count) => count],
  (comments: Array<Comment>, count: ?number): Array<Comment> => {
    const sorted = comments.sort((a, b) => moment(a.date).diff(moment(b.date)));
    if (!count) return sorted;
    return sorted.slice(0, count);
  }
);
