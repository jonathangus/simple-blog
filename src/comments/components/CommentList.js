/* @flow */
import React from 'react';
import { List } from 'antd';
import styled from 'styled-components';
import { grey } from '../../constants/Colors';

type Comment = {
  text: string,
  date: string,
  id: string
};

type Props = {
  comments: Array<Comment>
};

const Date = styled.span`
  color: ${grey};
  font-size: 12px;
  display: block;
`;

const CommentList = (props: Props) => {
  const { comments } = props;

  if (comments.length === 0) return null;

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={comments}
        renderItem={item => (
          <List.Item key={item.id}>
            <Date>{item.date}</Date>
            {item.text}
          </List.Item>
        )}
      />
    </div>
  );
};

export default CommentList;
