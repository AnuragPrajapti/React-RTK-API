import { RegisterWrapper, HeadingRegister, Container , ImageWrapper } from './registerStyle';
import { Button, Checkbox, Form, Input, Select, } from 'antd';
import { useGetRegisterUserMutation } from '../../services/createSlice';
import { NavLink } from 'react-router-dom';
import registerImage from '../../images/registerForm/registerImage.jpg'
import regFromImage from '../../images/registerForm/regFormImage.jpg'
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const [getRegister, getRegisterInfo] = useGetRegisterUserMutation();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    getRegister(values)
    form.resetFields();
    form.setFieldValue()
  };
  console.log(2222, getRegisterInfo);
  console.log(333, getRegisterInfo?.requestId);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="83">+93</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Container style={{ backgroundImage: `url(${registerImage})` }}>
      <RegisterWrapper>
        <HeadingRegister>Register Here!!</HeadingRegister>
        <Form
          className='registerForm'
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: '+91',
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="cpassword"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="name"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>


          <Form.Item
            name="age"
            label="Enter Age"
            // tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your age is greater then 18+!',
                whitespace: true,
              },
            ]}
          >
            <Input type='number' />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: 'Please input Address',
              },
            ]}
          >
            <Input.TextArea showCount maxLength={100} placeholder="Enter Home Address" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: 'Please select gender!',
              },
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button className='registerBtn' type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
          <p>Alredy have a Account ? <NavLink to="/" >Login</NavLink> </p>
        </Form>
      </RegisterWrapper>
           {/* <ImageWrapper>
              <img src={regFromImage} alt="img" />
           </ImageWrapper> */}
    </Container>
  )
}

export default Register;