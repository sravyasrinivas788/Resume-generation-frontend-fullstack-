import React from "react";
import './../resources/default.css'
import { Button, Dropdown, Menu } from 'antd'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../Pages/logo.png';
function Default(props) {
  const user = JSON.parse(localStorage.getItem("Student"))
  const navigate = useNavigate()
  const menu = (
      <Menu>
        <Menu.Item>
          <Link  to="/home">HOME</Link>
        </Menu.Item>
        <Menu.Item>
          <Link  to="/noti">NOTIFICATIONS</Link>
        </Menu.Item>
        <Menu.Item>
          <Link  to="/profile">PROFILE</Link>
        </Menu.Item>
        <Menu.Item onClick={()=>{localStorage.removeItem('Student')
        navigate('/login')


      }}>



         <span>LOG OUT</span>
        </Menu.Item>
      </Menu>
    );
  
  return (
    <div className="layout">
      <div className="header">
      <img src="https://www.cbit.ac.in/wp-content/uploads/2023/04/CBIT-LOGO-2023.png" className="logo"></img>
     
        <h1>MY RESUME</h1>
        
        <Dropdown overlay={menu} placement="bottomLeft">
                    <Button>{user.name}</Button>
                </Dropdown>
        



      </div>
      <div className="content">
        {props.children}

      </div>

    </div>
  )
}
export default Default;