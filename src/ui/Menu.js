import React from 'react';
import { Layout, Menu as AntMenu } from 'antd';
import { Link } from 'react-router';

const { Header } = Layout;

const links = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/add',
    name: 'Add post'
  },
  {
    path: '/posts',
    name: 'Archive'
  }
];

const Menu = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <AntMenu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          {links.map(link => (
            <AntMenu.Item key={link.path}>
              <Link to={link.path}>{link.name}</Link>
            </AntMenu.Item>
          ))}
        </AntMenu>
      </Header>
    </Layout>
  );
};

export default Menu;
