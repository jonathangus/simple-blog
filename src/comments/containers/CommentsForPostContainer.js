// @flow
import React from 'react';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { getCommentsForPostSelector } from '../selectors/CommentSelector';

type Props = {
  comments: Array<Object>,
  postId: string // eslint-disable-line
};

const CommentsForPostContainer = (props: Props) => {
  const { comments } = props;
  return <CommentList comments={comments} />;
};

const mapStateToProps = (state, ownProps) => ({
  comments: getCommentsForPostSelector(state, ownProps.postId)
});

export default connect(mapStateToProps)(CommentsForPostContainer);
