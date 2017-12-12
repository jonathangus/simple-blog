// @flow
import moment from 'moment';
import { createSelector } from 'reselect';

type Post = {
  title: string,
  body: string,
  date: string,
  id: string
};

export const getPostSelector = createSelector(
  [state => state.posts, state => state.comments, (state, count) => count],
  (
    posts: Array<Post>,
    comments: Array<Object>,
    count: ?number
  ): Array<Post> => {
    const sorted = posts
      .sort((a, b) => moment(b.date).diff(moment(a.date)))
      .map(post => ({
        ...post,
        commentCount: comments.filter(comment => comment.postId === post.id).length
      }));
    if (!count) return sorted;
    return sorted.slice(0, count);
  }
);

export const getPostFromId = createSelector(
  [state => state.posts, (state, ownProps) => ownProps.postId],
  (posts: Array<Post>, postId: string): Post => {
    const selected = posts.find(post => post.id === postId);
    if (!selected) {
      throw new Error(`Missing post with id ${postId}`);
    }
    return selected;
  }
);
