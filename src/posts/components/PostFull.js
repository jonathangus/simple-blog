/* @flow */
import React from 'react';
import { Divider } from 'antd';
import AddCommentContainer from '../../comments/containers/AddCommentContainer';
import CommentsForPostContainer from '../../comments/containers/CommentsForPostContainer';
import RowAnimation from '../../ui/RowAnimation';

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
      <RowAnimation>
        <h1>{title}</h1>
        {date}
        <p>{body}</p>
      </RowAnimation>
      <RowAnimation index={0}>
        <Divider />
        <div style={{ padding: '30px 0' }}>
          <h3>Add new comment</h3>
          <AddCommentContainer postId={id} />
        </div>
        <Divider />
      </RowAnimation>
      <RowAnimation index={2}>
        <h3>Comments</h3>
        <CommentsForPostContainer animationDelay={0.5} postId={id} />
      </RowAnimation>
    </div>
  );
};

export default PostFull;
