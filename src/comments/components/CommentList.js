/* @flow */
import React from 'react';
import { List } from 'antd';
import styled from 'styled-components';
import { grey } from '../../constants/Colors';
import RowAnimation from '../../ui/RowAnimation';

type Comment = {
  text: string,
  date: string,
  id: string
};

type Props = {
  comments: Array<Comment>,
  animationDelay: ?number
};

const Date = styled.span`
  color: ${grey};
  font-size: 12px;
  display: block;
`;

const CommentList = (props: Props) => {
  const { comments, animationDelay } = props;

  if (comments.length === 0) return null;

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={comments}
      renderItem={(item, index) => (
        <RowAnimation animation="right" delay={animationDelay} index={index}>
          <List.Item key={item.id}>
            <Date>{item.date}</Date>
            {item.text}
          </List.Item>
        </RowAnimation>
      )}
    />
  );
};

export default CommentList;
