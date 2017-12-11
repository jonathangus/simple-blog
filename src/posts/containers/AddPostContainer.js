// @flow
import React from 'react';
import { connect } from 'react-redux';
import AddPost from '../components/AddPost';
import { createPost } from '../actions/PostActions';

const AddPostContainer = ({ onCreate }: Function) => <AddPost onCreate={onCreate} />;

const mapDispatchToProps = dispatch => ({
  onCreate: model => dispatch(createPost(model))
});

export default connect(undefined, mapDispatchToProps)(AddPostContainer);
