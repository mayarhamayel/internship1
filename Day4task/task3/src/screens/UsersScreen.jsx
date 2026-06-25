import  { useState, useEffect } from "react";
import { getUsers } from "../services/userService";

function UsersScreen(){

    const[users,setUser]=useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const fetchUsersData = async () => {
          try {
            setLoading(true);
            const data = await getUsers();
            setUser(data);
          } catch (error) {
            console.log("An error occurred while retrieving data.", error);
          }finally{
            setLoading(false);

          }
        };

         fetchUsersData();



    },[])

    if (loading){
        return <h2>loading....</h2>;
    }
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