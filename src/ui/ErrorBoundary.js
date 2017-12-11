// @flow
import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

type Props = {
  children: any
}

type State = {
  errorMessage: ?string,
};

export default class ErrorBoundary extends React.Component<Props, State> {
  state = {
    errorMessage: null
  }

  componentDidCatch(error: Object, info: Object) {
    // Display fallback UI
    const errorMessage:string = `
      ${error.stack}
      ---------------
      ${info.componentStack}
    `;
    this.setState({ errorMessage });
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <TextArea disabled={!false} rows={20} defaultValue={this.state.errorMessage} />
      );
    }
    return this.props.children;
  }
}
