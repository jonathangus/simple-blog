// @flow
import React from 'react';
import { Button, Popconfirm } from 'antd';

type Props = {
  onDelete: Function
};

const DeletePostIcon = (props: Props) => (
  <Popconfirm
    title="Are you sure delete this article?"
    onConfirm={props.onDelete}
    okText="Yes"
    cancelText="No"
  >
    <Button type="danger" shape="circle" icon="cross" />
  </Popconfirm>
);

export default DeletePostIcon;
