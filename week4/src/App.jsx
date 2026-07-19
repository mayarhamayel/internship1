import Users from "./Users";
import UserContext from "./context/UserContext";
import Navbar from "./components/Navbar";

function App() {

  const currentUser = {
    name: "Admin User",

    role: "Admin",
  };
  return (
    <>
      <UserContext.Provider value={currentUser}>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Users />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
