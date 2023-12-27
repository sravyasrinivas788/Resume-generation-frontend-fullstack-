import React from 'react'
import '../resources/default.css'
import '../resources/auth.css'
import axios from 'axios'
import { Button, Checkbox, Form, message,Input,Spin } from 'antd';
import {useNavigate} from 'react-router-dom';
import  { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
function Reg(){
  const navigate=useNavigate();
  const[loading,setloading]=useState(false);
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
  })
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 

    
  const onfinish=async(values)=>{                                                                                          
    setloading(true);
    try{
    // const user=await axios.fetch('http://localhost:5000/api/user/login',{
    //   method:'POST'
    // })
    const user=await axios.post('/api/user/register',values)
    
    message.success("Login Success")
     localStorage.setItem("Student", JSON.stringify(user.data));
    
    setloading(false)
    navigate('/login')
    }
    catch(error){
      setloading(false)
      message.error(" Login Failed")

    }

  }
  // useEffect(()=>{
  //   if(localStorage.getItem("Student")){
  //     navigate('/profile')
  //   }

  // },[]);


return(
  <div className='auth-parent'style={{alignContent:'center'}} >
    {loading && <Spin/>}
   
    <Form layout='vertical' onFinish={onfinish}>
      <h2>Login</h2>
      <hr></hr>
      <Form.Item name='name' label='Enter Name' >
        <Input  value={formData.name} onChange={handleChange}/>
      </Form.Item>
      <Form.Item name='roll' label='Enter Rollno'>
        <Input  value={formData.roll} onChange={handleChange}/>
      </Form.Item>
      <Button type='primary' htmlType='submit' style={{ backgroundColor: 'black' }}>LOGIN</Button>
      <br></br>
      <br></br>
      <Link to="/">Go to Home</Link>
    </Form>
    
   
  </div>
      
    )
              }
    

export default Reg