
import { useState } from "react";
import 
'./UserName.css'
function UserName (){

    const [name,setName]=useState("");


    return (
      <div>
        <input
          className="nameInput"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <h2>{name}</h2>
      </div>
    );
}
export default UserName;