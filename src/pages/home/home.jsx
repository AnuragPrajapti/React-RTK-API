import React, { useState } from 'react'
import { HeadingHomePage , ImageWrapper , HomeWrapper } from './homeStyle';
import axios from 'axios';
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
//  import { JsonData } from '../../jsonData/cities-name-list'
 
 const { Option } = Select;
const Home = () => {
   
   const [ imageApiData , setImageApiData ] = useState(); 
   axios 
      .get(`https://629d9b8fc6ef9335c0a0e2d5.mockapi.io/fake_api`).then((res)=>{
           console.log("data",res.data);
           setImageApiData(res.data);
      }).catch((err)=>{
          console.log(err)
      })

      const onChange = (value) => {
         console.log(`selected ${value}`);
       };
       const onSearch = (value) => {
         console.log('search:', value);
       };

  return (
    <div className='container'>
      <HomeWrapper>
       <HeadingHomePage>List of Image Api!!!</HeadingHomePage>
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
              imageApiData?.map((item, index) => (
                <Option key={index} value={item.name}>{item.name}</Option>
              ))
            }
          </Select>
       {
          imageApiData?.map((item,index)=> <div key={index}>
                    <ImageWrapper>
                     <img src={item.avatar}/>
                     <p>{item.name}</p>
                     </ImageWrapper>
          </div> )
       }        
       </HomeWrapper>    
    </div>
  )
}

export default Home;