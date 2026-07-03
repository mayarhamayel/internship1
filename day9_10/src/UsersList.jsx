 import  { useState, useEffect } from 'react';
import { Card, Col, Row, Flex } from 'antd';

 
 
 function UsersList(){
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        const getUsers=async()=>{
            try{
                const response= await fetch("https://jsonplaceholder.typicode.com/users");
                const data=await response.json();
                setUsers(data);
            }catch(error){
                console.log(error);
            }
        }

        getUsers();
    },[])
    return (
      <Flex justify="center">
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          {users.map((user) => (
            <Col span={8} key={user.id}>
              <Card title={user.name}>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>

                <p>
                  <strong>Email:</strong> {user.email}
                </p>

                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Flex>
    );
 }
 export default UsersList;