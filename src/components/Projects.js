import React from "react";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
import TextArea from "antd/es/input/TextArea";
function Projects(){
    return(
    <div>
        <h5><b>Projects</b></h5>
      <hr/>
      <Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, 'ProjectName']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="ProjectName" />
                    </Form.Item>

                  </div>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, 'Domain']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="Domain" />
                    </Form.Item>

                  </div>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, 'DeployedLink']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="Link" />
                    </Form.Item>

                  </div>
                  
                 
                  <div className="col-md-2">
                    <MinusCircleOutlined style={{ fontSize: 20, color: "skyblue" }} onClick={() => remove(name)} />


                  </div>
                  <div className="col-md-12">
                    <Form.Item
                      {...restField}
                      name={[name, 'Descreption']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <TextArea placeholder="Descreption" />
                    </Form.Item>

                  </div>
                </>
              ))}
            </div>




            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Projects
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5><b>Experience</b></h5>
      <hr/>
      <Form.List name="internships">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, 'Name']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="Name" />
                    </Form.Item>

                  </div>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, 'Organisation']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="Organisation" />
                    </Form.Item>

                  </div>
                  
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, 'Des']}
                      rules={[
                        {
                          required: true,
                          message: 'Des',
                        },
                      ]}
                    >
                      <TextArea placeholder="Des" />
                    </Form.Item>

                  </div>
                  
                 
                  <div className="col-md-2">
                    <MinusCircleOutlined style={{ fontSize: 20, color: "skyblue" }} onClick={() => remove(name)} />


                  </div>
                </>
              ))}
            </div>




            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Experience(internships)
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5><b>Intrestedin</b></h5>
      <hr/>
      <Form.List name="int">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, 'int']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="Intrested" />
                    </Form.Item>

                  </div>
                  
                  
                  
                  
                 
                  <div className="col-md-2">
                    <MinusCircleOutlined style={{ fontSize: 20, color: "skyblue" }} onClick={() => remove(name)} />


                  </div>
                </>
              ))}
            </div>




            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Intrestedin
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      
      </div>
      
    )

}
export default Projects;