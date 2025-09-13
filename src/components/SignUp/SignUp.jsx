import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";

export const SignUp = () => {
  const [errorMessage, seterrorMessage] = useState([""]);
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
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
    <div className="card-body mt-8 max-w-lg mx-auto">
      <h3 className="text-3xl font-bold text-center">SignUp now</h3>
      <form onSubmit={handleSignUp} className="fieldset text-center mt-5">
        <input
          className=" w-full border-3 p-2 rounded-xl"
          type="email"
          name="email"
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          className="w-full border-3 p-2 rounded-xl mt-2"
          placeholder="Password"
        />
        <div className="mt-5">
          <a className="link link-hover ">Forgot password?</a>
        </div>
        <button
          type="submit"
          className="w-[50%] text-xl font-semibold cursor-pointer py-2 mt-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition duration-300"
        >
          SignUp
        </button>
      </form>
      {errorMessage && <p className="text-red-900">{errorMessage}</p>}
    </div>
  );
};
