import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const links = (
    <>
      <li className=" font-bold  px-4 py-1">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className=" font-bold  px-4 py-1">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className=" font-bold  px-4 py-1">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className=" font-bold  px-4 py-1">
        <NavLink to="/signUp">SignUp</NavLink>
      </li>
      {/* <li><NavLink to="/"></NavLink></li> */}
    </>
  );
  return (
    <div className="navbar bg-base-100 flex justify-between ">
      <h2 className="text-3xl font-semibold ml-2 ">Auth Form</h2>
      <nav>
        <ul className="flex space-x-10 py-2 ">{links}</ul>
      </nav>
      <button className=" bg-amber-500  hover:bg-amber-700 cursor-pointer hover:text-white px-5 m-2 font-bold  border rounded-xl ">
        Button
      </button>
    </div>
  );
};
