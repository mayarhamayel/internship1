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
          <h1 className="text-2xl font-bold text-center mt-3.5 italic tracking-wider text-pink-400">
            The Title
          </h1>
          <div className="flex ms-16 mt-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-[250px] h-[30px]  p-3 border rounded-xl border-pink-400"
            />
            <button className="w-[70px] h-[30px]  flex items-center justify-center border rounded-xl text-center cursor-pointer bg-gray-200 hover:bg-pink-200  text-pink-500 ">
              search
            </button>
          </div>

          <div className=" flex gap-3 justify-center flex-wrap my-14 items-center  ">
            {users.map((user) => (
              <div key={user.id}>
                <div className="flex flex-col gap-3 border justify-center items-center  rounded-xl w-[250px] h-[180px] shadow-pink-100 hover:shadow-xl text-xl text-pink-500 bg-pink-200 cursor-pointer p-3">
                      <h3>{user.name}</h3>
                      <p>{user.email}</p>
                  <p>{user.phone}</p>
                </div>
                  
              </div>
            ))}
          </div>
        </>
      );
}

export default UsersScreen;