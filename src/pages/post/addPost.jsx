import React, { useState } from 'react'
import { HeadingPost , ImageTag , PsotImage } from './addPostStyle';
import { FcSms  } from "react-icons/fc";
const AddPost = () => {
    const [ image , setImage ] = useState();
    const handleChange = (e) =>{
        console.log("Image", e.target.files[0])
        setImage(URL.createObjectURL(e.target.files[0]))

    }

  return (
     <div className="container">
         <HeadingPost>Add Post Here</HeadingPost>
         <ImageTag>
          <input type="file" onChange={handleChange} />
         </ImageTag>
         <PsotImage>
            <img src={image} />
            <FcSms style={{ fontSize : "50px" }} />
         </PsotImage>
     </div>    
 )
}

export default AddPost;