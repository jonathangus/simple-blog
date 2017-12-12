// @flow
import React from 'react';
import { Form, Input, Button } from 'antd';
import RowAnimation from '../../ui/RowAnimation';

const { TextArea } = Input;
const FormItem = Form.Item;

type Props = {
  onCreate: Function,
  form: any,
  getFieldDecorator: Function
};

class AddPost extends React.Component<Props> {
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
      <div>
        <h2>Add post</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <RowAnimation index={0}>
            <FormItem>
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Title is required!' }]
              })(<Input placeholder="Title" />)}
            </FormItem>
          </RowAnimation>

          <RowAnimation index={1}>
            <FormItem>
              {getFieldDecorator('body', {
                rules: [{ required: true, message: 'Body is required!' }]
              })(<TextArea rows={10} placeholder="Body" />)}
            </FormItem>
          </RowAnimation>
          <RowAnimation index={2}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Create
            </Button>
          </RowAnimation>
        </Form>
      </div>
    );
  }
}

export default Form.create()(AddPost);
