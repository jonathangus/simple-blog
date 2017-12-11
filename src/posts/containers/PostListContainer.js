// @flow
import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { getPostSelector } from '../selectors/PostSelector';

type Props = {
  posts: Array<Object>,
  count: ?number // eslint-disable-line
};

const PostListContainer = (props: Props) => {
  const { posts } = props;
  return <PostList posts={posts} />;
};

const mapStateToProps = (state, ownProps) => ({
  posts: getPostSelector(state, ownProps.count)
});

export default connect(mapStateToProps)(PostListContainer);
