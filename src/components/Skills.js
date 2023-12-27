import React from "react";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
function Skills() {
  return (
    <div>
      <h5><b>Education</b></h5>
      <hr />
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, 'Qualification']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="Qualification" />
                    </Form.Item>

                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, 'Percentage']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="Percentage" />
                    </Form.Item>

                  </div>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, 'Institution']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="Institution" />
                    </Form.Item>

                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, 'Year']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="Year of PassOut" />
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
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5><b>Skills</b></h5>
      <hr />
      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, 'Languages']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="Languages" />
                    </Form.Item>

                  </div>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, 'Frameworks']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="Frameworks" />
                    </Form.Item>

                  </div>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, 'Libs']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="Libraries" />
                    </Form.Item>

                  </div>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, 'Intrest']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first name',
                        },
                      ]}
                    >
                      <Input placeholder="Areas of Intrest" />
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
                Add Skills
              </Button>
            </Form.Item>
          </>
        )}

      </Form.List>

    </div>
  )
}
export default Skills