import React from 'react';
import styled from 'styled-components';
import PageWrapperHoc from '../hoc/PageWrapperHoc';

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const MissingPage = () => <Wrapper><img alt="rage" src="https://media.giphy.com/media/12bVDtXPOzYwda/giphy.gif" /></Wrapper>;

export default PageWrapperHoc(MissingPage, '404');
