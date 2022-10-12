import { AdminWrapper, HeadingAddUser, FormWrapper , CloseBtn } from './adminStyle';
import Table from 'react-bootstrap/Table';
import { useGetAllPostDataQuery } from '../../services/createSlice';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  // AutoComplete,
  // Button,
  // Cascader,
  Checkbox,
  // Col,
  Form,
  Input,
  // InputNumber,
  // Row,
  Select,
} from 'antd';


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


const Admin = () => {
  const { data, isLoading, error } = useGetAllPostDataQuery();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("data", data)
  return (
    <AdminWrapper>
      <h1>Users Details....</h1>
      <button className='addBtn btn btn-primary' onClick={handleShow} >Add User</button>
      <Table striped bordered hover variant="dark" className='container' >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((item, index) => (
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td><button className='deleteBtn btn btn-danger' >DELETE</button></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{'borderRadius':'5px !important'}}
       >
        <HeadingAddUser>Register Here!!</HeadingAddUser>
        <Modal.Body>
          <FormWrapper>
            <Form
              className='AddUserForm'
              {...formItemLayout}
              // form={form}
              name="addUser"
              // onFinish={onFinish}
              initialValues={{
                prefix: '+91',
              }}
              scrollToFirstError
            >
              <Form.Item
                name="name"
                label="Enter Name"
                // tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Name!',
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder='Enter Name' />
              </Form.Item>
              <Form.Item
                name="age"
                label="Enter Age"
                // tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: 'Please input your age is greater then 18+',
                    whitespace: true,
                  },
                ]}
              >
                <Input type='number' placeholder='Enter Age' />
              </Form.Item>
              <Form.Item
                name="salary"
                label="Enter Salary"
                // tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Salary',
                    whitespace: true,
                  },
                ]}
              >
                <Input type='number' placeholder='Enter Age' />
              </Form.Item>
              <Form.Item
                name="city"
                label="City"
                rules={[
                  {
                    required: true,
                    message: 'Please input City',
                  },
                ]}
              >
                <Input  placeholder="Enter City" />
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
                <button id="addUserbtn" className='btn btn-primary' >
                  AddUser
                </button>
              </Form.Item>
            </Form>
          </FormWrapper>
        </Modal.Body>
        <Modal.Footer>
          <CloseBtn className="btn btn-danger" onClick={handleClose}>
            Close
          </CloseBtn>
        </Modal.Footer>
      </Modal>
    </AdminWrapper>
  )
}

export default Admin;