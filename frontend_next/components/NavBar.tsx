"use client";
import { status } from "@/consts/consts";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Image from "next/image";
import logo from "../public/schedule.png";

export default function NavBar() {
  const { user } = useSelector((state: RootState) => state.data);

  const routes = [
    { text: "Home", url: "/home", access: [status.user, status.admin] },
    {
      text: "Reservar",
      url: "/reservations",
      access: [status.user, status.admin],
    },
    { text: "Menu Admin", url: "/admin", access: status.admin },
  ];
  return (
    <div className="navbar bg-base-100 rounded-md mb-3">
      <div className="dropdown absolute ">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {routes
            // .filter((route) => route.access.includes[user.access])
            .map((route) => (
              <li>
                <a href={route.url}>{route.text}</a>
              </li>
            ))}
        </ul>
      </div>

      <div className="flex mx-auto lg:mx-0 lg:navbar-start">
        <a className="flex items-center gap-2 mx-auto lg:mx-0" href="/home">
          {" "}
          <Image
            className="h-12 w-12"
            src={logo}
            alt="App Logo"
            width={50}
            height={50}
          />
          <p>Organizador</p>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {routes
            // .filter((route) => route.access.includes[user.access])
            .map((route) => (
              <li>
                <a href={route.url}>{route.text}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
