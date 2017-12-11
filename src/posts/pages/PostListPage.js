/* @flow */
import React from 'react';
import PostListContainer from '../containers/PostListContainer';
import PageWrapperHoc from '../../hoc/PageWrapperHoc';

const PostListPage = () => <PostListContainer />;

export default PageWrapperHoc(PostListPage, 'Posts');
