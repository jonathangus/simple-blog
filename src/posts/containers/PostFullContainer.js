// @flow
import React from 'react';
import { connect } from 'react-redux';
import PostFull from '../components/PostFull';
import { getPostFromId } from '../selectors//PostSelector';

type Props = {
  post: Object,
  postId: ?string // eslint-disable-line
};

const PostFullContainer = (props: Props) => {
  const { post } = props;
  return <PostFull post={post} />;
};

const mapStateToProps = (state, ownProps) => ({
  post: getPostFromId(state, ownProps)
});

export default connect(mapStateToProps)(PostFullContainer);
