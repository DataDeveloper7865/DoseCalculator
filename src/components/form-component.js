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

const onFinish = values => {
    console.log('Success:', values);
};

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


class Demo extends Component {


    render() {
        return (
            <>
            <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Protein Conc (mg/mL)"
                name="proteinconc"
                rules={[
                {
                    required: true,
                    message: 'Please input protein concentration',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Maximum Dose Anticipated"
                name="dose"
                rules={[
                {
                    required: true,
                    message: 'Please input the dose!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Methionine Concentration (mM)"
                name="metconc"
                rules={[
                {
                    required: true,
                    message: 'Please input the methionine concentration!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Sucrose Concentration (mM)"
                name="sucroseconc"
                rules={[
                {
                    required: true,
                    message: 'Please input the sucrose concentration!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="PS20 Concentration (mg/mL)"
                name="ps20conc"
                rules={[
                {
                    required: true,
                    message: 'Please input the sucrose concentration!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Calculate
                </Button>
            </Form.Item>
            </Form>

            <p> The maximum volume is: </p>
            <p> The maximum exposure of </p>


            </>

        );
    }
};

export default Demo;
