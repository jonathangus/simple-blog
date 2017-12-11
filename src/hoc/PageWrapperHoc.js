// @flow
import * as React from 'react';
import ErrorBoundary from '../ui/ErrorBoundary';

const PageWrapperHoc = (
  ComposedComponent: React.ComponentType<any>,
  title: string
) => (props: any) => {
  document.title = title;

  return (
    <ErrorBoundary><ComposedComponent {...props} /></ErrorBoundary>
  );
};

export default PageWrapperHoc;
