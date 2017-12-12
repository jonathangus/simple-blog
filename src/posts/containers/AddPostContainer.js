// @flow
import React from 'react';
import { push } from 'react-router-redux';
import { message } from 'antd';
import { connect } from 'react-redux';
import AddPost from '../components/AddPost';
import { createPost } from '../actions/PostActions';

const AddPostContainer = ({ onCreate }: Function) => <AddPost onCreate={onCreate} />;

const mapDispatchToProps = dispatch => ({
  onCreate: (model) => {
    // @TODO Move this logic to redux-saga
    const action = createPost(model);
    dispatch(action);
    dispatch(push(`/posts/${action.id}`));
    message.success('Article have been added!');
  }
});

export default connect(undefined, mapDispatchToProps)(AddPostContainer);
