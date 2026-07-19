import { useState, useEffect } from "react";


function useUsers(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

   

    async function fetchUsers() {
        setLoading(true);

        try {

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        const data = await response.json();

        setUsers(data);

    }catch(error){
        setError(error.message);

    }finally{

      setLoading(false);

      }

    

     }

     useEffect(() => {
       fetchUsers();
     }, []);
     

    return {
      users,

      loading,

      error,
    };
}

export default useUsers;