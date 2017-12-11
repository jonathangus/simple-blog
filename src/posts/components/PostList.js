/* @flow */
import React from 'react';
import { List, Icon } from 'antd';
import { Link } from 'react-router';
import styled from 'styled-components';
import truncateString from '../../util//TruncateString';
import { grey } from '../../constants/Colors';

const MissingPosts = styled.div`
  color: ${grey}
`;

type Post = {
  title: string,
  body: string,
  date: string,
  id: string,
  commentCount: number
};

type Props = {
  posts: Array<Post>
};

type State = {
  currentPage: number
}

const CommentIcon = (
  { count } // eslint-disable-line
) => (
  <span>
    <Icon type="message" style={{ marginRight: 8 }} />
    {count}
  </span>
);

const PostList = (props: Props) => {
  const { posts } = props;

  if (posts.length === 0) {
    return (
      <MissingPosts>
        No posts yet! You should totally add a new one
      </MissingPosts>
    );
  }

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={posts}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[<CommentIcon count={item.commentCount} />]}
        >
          <List.Item.Meta
            description={item.date}
            title={<Link to={`/posts/${item.id}`}>{item.title}</Link>}
          />
          {truncateString(item.body, 25)}
        </List.Item>
      )}
    />
  );
};

export default PostList;
