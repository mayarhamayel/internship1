import  { useState, useEffect } from "react";
import { getUsers } from "../services/userService";

function UsersScreen(){

    const[users,setUser]=useState([]);

    useEffect(()=>{

        const fetchUsersData = async () => {
          try {
            const data = await getUsers();
            setUser(data);
          } catch (error) {
            console.log("An error occurred while retrieving data.", error);
          }
        };

         fetchUsersData();



    },[])

    return (
      <>
        {users.map((user) => (
          <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            <p>{user.phone}</p>
              
          </div>
        ))}
      </>
    );
}

export default UsersScreen;