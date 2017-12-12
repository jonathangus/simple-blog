// @flow
import { createSelector } from 'reselect';
import moment from 'moment';

type Comment = {
  text: string,
  postId: string,
  date: string,
  id: string
};

type Post = {
  id: string
};

export const getCommentsForPostSelector = createSelector(
  [state => state.comments, (state, postId) => postId],
  (comments: Array<Comment>, postId: string): Array<Comment> =>
    comments.filter(comment => comment.postId === postId)
);

export const getLatestCommentsSelector = createSelector(
  [state => state.comments, state => state.posts, (state, count) => count],
  (
    comments: Array<Comment>,
    posts: Array<Post>,
    count: ?number
  ): Array<Comment> => {
    const postIds: Array<string> = posts.map(post => post.id);

    // Only display comments connected to a post
    const sorted = comments
      .filter(comment => postIds.includes(comment.postId))
      .sort((a, b) => moment(a.date).diff(moment(b.date)));

    if (!count) return sorted;
    return sorted.slice(0, count);
  }
);
