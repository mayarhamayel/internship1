import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center  bg-pink-200 p-5 ">
        <ul className="flex gap-7 text-lg text-pink-600 ">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Users">Users</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>

          <li>
            <Link to="/Registr">Registr</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
