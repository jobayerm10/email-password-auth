import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";

export const Register = () => {
  const [errorMessage, seterrorMessage] = useState([""]);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        seterrorMessage(error.message);
      });
  };
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-4xl my-5">Register</h2>
      <form onSubmit={handleRegister}>
        <label className="input validator flex mt-5 gap-2 ml-2 items-center border-3 p-2 rounded-xl">
          <svg
            className="h-[1em] opacity-50 text-xl"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            className="focus:outline-none "
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </label>
        <label className="input validator flex mt-5 gap-2 ml-2 items-center border-3 p-2 rounded-xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            className="focus:outline-none"
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </label>
        <button
          type="submit"
          className="w-[50%] text-xl font-semibold cursor-pointer py-2 mt-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition duration-300"
        >
          Login
        </button>
      </form>
      {errorMessage && <p className="text-red-900">{errorMessage}</p>}
    </div>
  );
};
