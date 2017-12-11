// @flow
import React from 'react';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;
const FormItem = Form.Item;

type Props = {
  onCreate: Function,
  form: any,
  getFieldDecorator: Function
};

class AddComment extends React.Component<Props> {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, onCreate } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        onCreate(values);
        form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('text', {
            rules: [{ required: true, message: 'Text is required!' }]
          })(<TextArea rows={10} placeholder="Text" />)}
        </FormItem>

        <Button type="primary" htmlType="submit" className="login-form-button">
          Post comment
        </Button>
      </Form>
    );
  }
}

export default Form.create()(AddComment);
