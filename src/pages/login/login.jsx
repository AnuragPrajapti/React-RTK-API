import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { LoginWrapper , HeadingLogin , Container } from './loginStyle';
import { NavLink } from 'react-router-dom';
import { useGetChangePasswordMutation, useGetForgetPasswordMutation, useGetLoginUserMutation} from '../../services/createSlice';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Login = () => {
  const [userLogin, userLoginInfo] = useGetLoginUserMutation();
  const [setForget, setForgetInfo] = useGetForgetPasswordMutation();
  const [ changePassword , changePasswordInfo ] = useGetChangePasswordMutation();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    userLogin(values);
    form.resetFields()
  };

  useEffect(() => {
    if (userLoginInfo?.data?.token) {
      localStorage.setItem('authToken', JSON.stringify(userLoginInfo?.data?.token));
      console.log("loginToken",userLoginInfo?.data?.token)
    }
  }, [userLoginInfo])

  // Modal Popup  And Forget Password
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inpval, setInpval] = useState({
    email: '',
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("email", inpval);
  //   setForget(inpval);
  //   setInpval({
  //     email: '',
  //   })
  // }

  const handleChangePasss = (e) => {
    e.preventDefault();
    console.log("ChangePassword",inpval);
    changePassword(inpval)
  }

  return (
    <Container>
    <LoginWrapper>
      <HeadingLogin>Login Here!!</HeadingLogin>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="test@gmail.com" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="********"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox style={{ color : '#ffff' }} >Remember me</Checkbox>
          </Form.Item>

          <NavLink className="login-form-forgot" onClick={handleShow}>
            Forgot Password
          </NavLink>
          <br />
          <p onClick={handleShow}>
            <NavLink className="login-form-forgot">
              Change Password
            </NavLink>
          </p>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="loginBtn">
            Log in
          </Button>
          Or <NavLink to="/register">register now!</NavLink>
        </Form.Item>
      </Form>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chaneg_Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={inpval.email}
                placeholder='test@gmail.com'
                onChange={(e) => setInpval({ ...inpval, email: e.target.value })}
              />
              <div className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder='*******'
                value={inpval.password}
                onChange={(e) => setInpval({ ...inpval, password: e.target.value })}
              />
              <div className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" onClick={handleChangePasss} className="btn btn-primary">Submit</button>
          </form>
        </Modal.Body>
      </Modal>
    </LoginWrapper>
    </Container>
  )
}

export default Login;