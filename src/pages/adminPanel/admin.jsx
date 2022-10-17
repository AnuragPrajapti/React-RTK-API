import { AdminWrapper, HeadingAddUser, FormWrapper, CloseBtn, SearchHeading } from './adminStyle';
import Table from 'react-bootstrap/Table';
import { useGetAddUserMutation, useGetAllPostDataQuery, useGetDeleteUserMutation } from '../../services/createSlice';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Checkbox, Form, Input, Select,} from 'antd';
import { JsonData } from '../../jsonData/cities-name-list'
import { AiFillDelete } from "react-icons/ai";

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

const Admin = () => {
  const { data, isLoading, error } = useGetAllPostDataQuery();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [addUser, addUserInfo] = useGetAddUserMutation();
  const [ deleteUser , deleteUserInfo ] = useGetDeleteUserMutation();
  const [form] = Form.useForm();

  const onFinish = (value) => {
    console.log("impoutFormValues", value);
    addUser(value)
    form.resetFields();
    window.location('/admin')
  }

  const handleDelete = (id) => {
    deleteUser(id)
    console.log("delete",id)
  }

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  

  return (
    <AdminWrapper>
      <h1>Users Details....</h1>
      <div className="container">
        <SearchHeading>
          <Select
            showSearch
            placeholder="Select a City"
            optionFilterProp="children"
            onChange={onChange}
            style={{ display : "flex" , width : '300px' }}
            onSearch={onSearch}
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
          >
            {
              JsonData?.map((item, index) => (
                <Option key={index} value={item.name}>{item.name}</Option>
              ))
            }
          </Select>
        </SearchHeading>
        <button className='addBtn btn btn-primary' onClick={handleShow} >Add User</button>
        <Table striped bordered hover variant="dark">
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
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                  <td 
                  style={{ fontSize : '28px' , color : 'red' }}
                  onClick={()=> handleDelete(item._id)}
                    >
                    {/* <button className='deleteBtn btn btn-danger' > */}
                    <AiFillDelete />
                    {/* </button> */}
                    </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ 'borderRadius': '5px !important' }}
      >
        <HeadingAddUser>AddUser Here!!</HeadingAddUser>
        <Modal.Body>
          <FormWrapper>
            <Form
              className='AddUserForm'
              {...formItemLayout}
              form={form}
              name="addUser"
              onFinish={onFinish}
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
              {/* <Form.Item
                name="city"
                label="City"
                rules={[
                  {
                    required: true,
                    message: 'Please input City',
                  },
                ]}
              >
                <Input placeholder="Enter City" />
              </Form.Item> */}



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
              <Select
                showSearch
                placeholder="Select a City"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                style={{ display : "flex" }}
                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              >
                {
                  JsonData?.map((item, index) => (
                    <Option key={index} value={item.name}>{item.name}</Option>
                  ))
                }
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