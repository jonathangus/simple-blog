/* @flow */
import React from 'react';
import AddCommentContainer from '../../comments/containers/AddCommentContainer';
import CommentsForPostContainer from '../../comments/containers/CommentsForPostContainer';
import { Divider } from 'antd';

type Post = {
  title: string,
  body: string,
  date: string,
  id: string
};

type Props = {
  post: Post
};

const PostFull = (props: Props) => {
  const { post: { title, body, date, id } } = props;

  return (
    <div>
      <h1>{title}</h1>
      {date}
      <p>{body}</p>
      <Divider />
      <div style={{ padding: '30px 0' }}>
        <h3>Add new comment</h3>
        <AddCommentContainer postId={id} />
      </div>
      <Divider />
      <h3>Comments</h3>
      <CommentsForPostContainer postId={id} />
    </div>
  );
};

export default PostFull;
