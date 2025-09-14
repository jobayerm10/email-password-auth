import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const SignUp = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, seterrorMessage] = useState([""]);
  const [showPassword, setShowPassword] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password);

    setSuccess(false);
    seterrorMessage("");

    {
      if (!terms) {
        seterrorMessage("Please accept our terms and conditions");
        return;
      }
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
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
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="w-full border-3 p-2 rounded-xl mt-2 "
            placeholder="Password"
          />

          <button
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="btn btn-sm absolute top-5 right-3"
          >
            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </button>
        </div>
        <div className="mt-5">
          <a className="link link-hover ">Forgot password?</a>
        </div>
        <label className="label">
          <input type="checkbox" className="checkbox mt-4" name="terms" />
          Accept terms and conditions
        </label>
        <br />
        <button
          type="submit"
          className="w-[50%] text-xl font-semibold cursor-pointer py-2 mt-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition duration-300"
        >
          SignUp
        </button>
      </form>
      {errorMessage && <p className="text-red-900">{errorMessage}</p>}
      {success && (
        <p className="text-green-600">User has created successfully</p>
      )}
    </div>
  );
};
