import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

  return (
    <>
      <div className="mt-8">
        <h1 className=" text-center mb-6 text-2xl text-pink-500 italic ">
          Home page
        </h1>
        <p className="text-center ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          quaerat nihil vel enim, mollitia tempora alias consectetur repellendus
          saepe placeat. Accusamus totam distinctio quasi esse asperiores rem,
          neque maxime quisquam.
        </p>
      </div>

      <div className="flex justify-center items-center mt-6">
        <button
          className="rounded-md border p-2 bg-pink-200 text-pink-600 cursor-pointer  "
          onClick={() => navigate("/Users")}
        >
          Go To Users Page
        </button>
      </div>
    </>
  );
}
export default Home;
