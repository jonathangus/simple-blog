// @flow
import React from 'react';
import { connect } from 'react-redux';
import AddComment from '../components/AddComment';
import { createComment } from '../actions/CommentActions';

type Props = {
  onCreate: Function,
  postId: string // eslint-disable-line
};

const AddCommentContainer = (props: Props) => {
  const { onCreate } = props;
  return <AddComment onCreate={onCreate} />;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreate: model => dispatch(createComment(model.text, ownProps.postId))
});

export default connect(undefined, mapDispatchToProps)(AddCommentContainer);
