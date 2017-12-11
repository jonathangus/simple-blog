// @flow
import React from 'react';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { getLatestCommentsSelector } from '../selectors/CommentSelector';

type Props = {
  comments: Array<Object>
};

const LatestCommentsContainer = (props: Props) => {
  const { comments } = props;
  return <CommentList comments={comments} />;
};

const mapStateToProps = state => ({
  comments: getLatestCommentsSelector(state, 5)
});

export default connect(mapStateToProps)(LatestCommentsContainer);
