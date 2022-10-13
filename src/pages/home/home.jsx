import React, { useState } from 'react'
import { HeadingHomePage , ImageWrapper , HomeWrapper } from './homeStyle';
import axios from 'axios';

const Home = () => {
   
   const [ imageApiData , setImageApiData ] = useState();

   axios 
      .get(`https://629d9b8fc6ef9335c0a0e2d5.mockapi.io/fake_api`).then((res)=>{
           console.log("data",res.data);
           setImageApiData(res.data);
      }).catch((err)=>{
          console.log(err)
      })

  return (
    <div className='container'>
      <HomeWrapper>
       <HeadingHomePage>List of Image Api!!!</HeadingHomePage>
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