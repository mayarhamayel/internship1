

import {  Form, Input,Button } from 'antd';

function Management (){

     const onFinish = async (values) => {

        try{
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/users",{
                method:'POST',
                headers: {
               'Content-Type': 'application/json',

              },
              body:JSON.stringify(values),
        });

        const data = response.json();
        console.log(data);

        }catch(error){
            console.log(error);

        }



       
     };


    return (
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Full Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            {
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please enter your phone number",
            },
            {
              min: 10,
              message: "Minimum 10 characters",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please enter your address",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    );

}
export default Management;