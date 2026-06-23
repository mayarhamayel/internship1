import { useState } from "react";
import'./ShowHide'

function ShowHide (){

    const[hide,setHide]=useState(true);

    return (
      <>
        <div className="pa">
          <button className="btnn" onClick={() => setHide(!hide)}>
            Hide/Show
          </button>

          {hide && <h2>Mayar Hamayel</h2>}
        </div>
      </>
    );
}
export default ShowHide;