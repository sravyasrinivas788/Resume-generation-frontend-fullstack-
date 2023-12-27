import { Form, Input,Upload,Button } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import 'bootstrap/dist/css/bootstrap.css';
import TextArea from "antd/es/input/TextArea";
import Login from "../Pages/Login"




function Personal(){
    const [fileList, setFileList] = useState([]);

  const customRequest = ({ file, onSuccess }) => {
    // Your logic for handling the image file, e.g., uploading to a server
    console.log("File to be uploaded:", file);
    // Simulating a successful upload
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  const beforeUpload = (file) => {
    // Add your logic for checking file type, size, etc.
    // For now, we'll just add the file to the fileList
    setFileList([file]);
    return false; // Prevent default upload behavior
  };

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };
    
    
    return(
       
        <div className="container">
             <h5><b>Personal deatils</b></h5>
      <hr/>
      

            
        <div className="row">
        <div className="col-md-4">
          <Form.Item
            label="Profile Image"
            name="profileImage"
            rules={[
              { required: true, message: "Please upload your profile image!" },
            ]}
          >
            <Upload
              customRequest={customRequest}
              maxCount={1}
              listType="picture"
              accept="image/*"
              beforeUpload={beforeUpload}
              onChange={handleChange}
              fileList={fileList}
              onRemove={() => setFileList([])}
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
        </div>

            
        
            <div className="col-md-4 ">
           
                <Form.Item label="Name" name="Name" rules={[{required:true}]}>
                    <Input className="form-control">
                        
                        </Input>
                </Form.Item>

            </div>
            <div className="col-md-4 ">
                <Form.Item label="RollNumber" name="RollNumber" rules={[{required:true}]}>
                    <Input className="form-control">
                        
                        </Input>
                </Form.Item>

            </div>
            <div className="col-md-4 ">
                <Form.Item label="Email" name="Email" rules={[{required:true}]}>
                    <Input className="form-control">
                        
                        </Input>
                </Form.Item>

            </div>
            

<div className="col-md-4 ">
    <Form.Item
        label="LinkedIn"
        name="LinkedIn"
        rules={[
            { required: true, message: 'Please enter your LinkedIn URL!' },
            {
                type: 'url',
                message: 'Please enter a valid LinkedIn URL!',
            },
        ]}
    >
        <Input className="form-control" placeholder="LinkedIn Profile URL" />
    </Form.Item>
</div>

<div className="col-md-4 ">
    <Form.Item
        label="GitHub"
        name="GitHub"
        rules={[
            { required: true, message: 'Please enter your GitHub URL!' },
            {
                type: 'url',
                message: 'Please enter a valid GitHub URL!',
            },
        ]}
    >
        <Input className="form-control" placeholder="GitHub Profile URL" />
    </Form.Item>
</div>



            <div className="col-md-4 ">
                <Form.Item label="Mobile" name="Mobile" rules={[{required:true}]}>
                    <Input className="form-control">
                        
                        </Input>
                </Form.Item>

            </div>
            <div className="col-md-4 ">
                <Form.Item label="Branch" name="Branch" rules={[{required:true}]}>
                    <Input className="form-control">
                        
                        </Input>
                </Form.Item>

            </div>
            <div className="col-md-12 ">
                <Form.Item label="Personal-Intrests and achievements(NON -TECHNICAL)" name="Personal" rules={[{required:true}]}>
                    <TextArea className="form-control">
                        
                        </TextArea>
                </Form.Item>

            </div>

           
        </div>
        
        </div>
        
    )
}
export default Personal;