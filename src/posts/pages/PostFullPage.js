/* @flow */
import React from 'react';
import PostFullContainer from '../containers/PostFullContainer';
import PageWrapperHoc from '../../hoc/PageWrapperHoc';

const PostFullPage = ({ params }) => (
  <PostFullContainer postId={params.postId} />
);

export default PageWrapperHoc(PostFullPage, 'Post');
