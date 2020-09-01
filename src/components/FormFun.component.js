import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

class FormFun extends Component {

    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
        this.state = {
            username: "",
            password: "",
            remember: false
        };
    }

    onFinish(values) {
        this.setState({
            username: values.username,
            password: values.password,
            remember: values.remember
        });
    };

    render() {
        const remembered = this.state.remember;
        return(
        <>
            <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={this.onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    <h1> The username is: {this.state.username} </h1>
    <h1> The password is: {this.state.password} </h1>
    <h1> The password is: <b>{remembered ? 'totally remembered' : 'NOT REMEMBERED'}</b> </h1>

    </>
        );
    };
};

export default FormFun;