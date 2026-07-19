import { useContext } from "react";
import UserContext from "../context/UserContext";

function Navbar() {
    const user = useContext(UserContext);
    return (
      <div className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Users Dashboard</h1>

        <div className="text-right">
          <p className="font-semibold">{user.name}</p>

          <p className="text-sm">{user.role}</p>
        </div>
      </div>
    );
}
export default Navbar;