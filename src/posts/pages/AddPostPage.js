/* @flow */
import React from 'react';
import AddPostContainer from '../containers/AddPostContainer';
import PageWrapperHoc from '../../hoc/PageWrapperHoc';

const AddPostPage = () => <AddPostContainer />;

export default PageWrapperHoc(AddPostPage, 'Add post');
