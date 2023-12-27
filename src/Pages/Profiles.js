
import React, { useState, useEffect, } from "react";
import Default from "../components/Default";
import { Button, Form, Tabs, message, Spin } from 'antd';
import Personal from "../components/Personal";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

function Profiles() {
    const [loading, setloading] = useState(false);
    const storedUser = localStorage.getItem("Student");
    const user = storedUser ? JSON.parse(storedUser) : {}; // Parse user data or use an empty object
    const [form] = Form.useForm();
    const navigate=useNavigate();



    const onfinish = async (values) => {
        setloading(true);
        try {
            // Assuming user._id is available in the user data
            const response = await axios.post('/api/user/update', { ...values, _id: user._id });

            message.success("Updated Profile");

            // Update localStorage with the new user data
            //localStorage.setItem("Student", JSON.stringify(response.data));
            navigate('/home');
            

            setloading(false);
        } catch (error) {
            setloading(false);
            console.error("Update Error:", error);
            message.error("Update Failed");
        }
    };

    useEffect(() => {
        form.setFieldsValue(user); // Set form fields with user data when the component mounts
    }, [user, form]);

    return (
        <Default>
            {loading && <Spin size="large"></Spin>}
            <div className="update-profile">
                <h2>Profile-Update</h2>
                <hr/>
                <Form form={form} layout="vertical" onFinish={onfinish} initialValues={user}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Personal-Info" key="1"><Personal /></TabPane>
                        <TabPane tab="Skills and Education" key="2"><Skills /></TabPane>
                        <TabPane tab="Experience and Projects" key="3"><Projects /></TabPane>
                    </Tabs>
                    <Button htmlType="submit" name="Submit and Next" style={{ backgroundColor: "grey" }}>Submit and Next</Button>
                </Form>
            </div>
        </Default>
    );
}

export default Profiles;
