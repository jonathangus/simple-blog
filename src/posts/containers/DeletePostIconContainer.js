// @flow
import React from 'react';
import { connect } from 'react-redux';
import DeletePostIcon from '../components/DeletePostIcon';
import { deletePost } from '../actions/PostActions';

const DeletePostIconContainer = ({ onDelete }: Function) => <DeletePostIcon onDelete={onDelete} />;

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(deletePost(ownProps.postId))
});

export default connect(undefined, mapDispatchToProps)(DeletePostIconContainer);
