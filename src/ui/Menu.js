import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { Icon } from 'antd';

const Nav = styled.nav`
  display: flex;
  box-shadow: 2px 2px 8px rgba(80, 80, 80, 0.27);
`;

const NavItem = styled(Link)`
  padding: 20px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    text-decoration: none;
  }

  &.active {
    color: white;
    background-color: #1890ff;
  }
`;

const GitHub = styled(Link)`
  margin-left: auto;
  margin-right: 20px;
  align-items: center;
  display: flex;
`;

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
    <Nav>
      {links.map(link => (
        <NavItem key={link.path} activeClassName="active" to={link.path}>
          {link.name}
        </NavItem>
      ))}
      <GitHub to="https://github.com/jonathangus/simple-blog">
        <Icon style={{ fontSize: 36, color: '#08c' }} type="github" />
      </GitHub>
    </Nav>
  );
};

export default Menu;
