import { useState } from "react";

function Registr() {
  const [nameInput, setnameInput] = useState("");
  const [emailInput, setemaiInput] = useState("");
  const [phoneInput, setphoneInput] = useState("");
  const [addresInput, setaddresInput] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    const formData = {
      fullName: nameInput,
      email: emailInput,
      phone: phoneInput,
      address: addresInput,
    };

    console.log("Submitted Data:", formData);

  }
  return (
    <>
      <div className="flex justify-center items-center">
        <div className=" w-2xs  mt-10">
          <h1 className="text-center mb-6 text-2xl text-pink-500 italic font-bold">
            Registr
          </h1>
          <form className="flex flex-col " onSubmit={handleSubmit}>
            <input
              className="border p-1.5 rounded-2xl mb-5 border-pink-400 "
              type="text"
              placeholder="Full Name"
              value={nameInput}
              onChange={(e) => {
                setnameInput(e.target.value);
              }}
            />

            <input
              className="border p-1.5 rounded-2xl mb-5 border-pink-400 "
              type="text"
              placeholder="Email"
              value={emailInput}
              onChange={(e) => {
                setemaiInput(e.target.value);
              }}
            />

            <input
              className="border p-1.5 rounded-2xl mb-5 border-pink-400 "
              type="text"
              placeholder="Phone Number"
              value={phoneInput}
              onChange={(e) => {
                setphoneInput(e.target.value);
              }}
            />

            <input
              className="border p-1.5 rounded-2xl mb-5 border-pink-400 "
              type="text"
              placeholder="Address"
              value={addresInput}
              onChange={(e) => {
                setaddresInput(e.target.value);
              }}
            />

            <button
              className="rounded-md border p-2 bg-pink-200 text-pink-600 cursor-pointer  "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registr;
