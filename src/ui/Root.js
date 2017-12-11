/* @flow */
import React from 'react';
import Menu from './Menu';
import { Layout, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const Root = (props: any) => (
  <div>
    <Menu />
    <Content style={{ padding: 50 }}>
    {props.children}
    </Content>
  </div>
);

export default Root;
