/* @flow */
import React from 'react';
import { Row, Col } from 'antd';
import PostListContainer from '../posts/containers/PostListContainer';
import LatestCommentsContainer from '../comments/containers/LatestCommentsContainer';

const Home = () => (
  <div>
    <Row gutter={24}>
      <Col span={24} md={12}>
        <h2>Latest posts</h2>
        <PostListContainer count={5} />
      </Col>
      <Col span={24} md={12}>
        <h2>Latest comments</h2>
        <LatestCommentsContainer />
      </Col>
    </Row>
  </div>
);

export default Home;
