/* @flow */
import React from 'react';
import { Router } from 'react-router';
import routes from './config/Routes';

type AppRouterProps = {
  history: History
}

const AppRouter = (props: AppRouterProps) => (
  <Router routes={routes} history={props.history} />
);

export default AppRouter;

