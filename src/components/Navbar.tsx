"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { logout } from "@/services/AuthService";
import Link from "next/link";

const Navbar = () => {
  const user = useUser();
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState(user?.user || null);
  const [userRole, setUserRole] = useState(user?.user?.role || undefined);

  // Sync local state with user context
  useEffect(() => {
    setCurrentUser(user?.user);
    setUserRole(user?.user?.role); // Update role when user changes
  }, [user?.user]);

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    setUserRole(undefined); // Clear role on logout
    router.push("/login");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
            {userRole === "customer" && (
                <Link className="" href={"/my-orders"}>
                  Customer Dashboard
                </Link>
            )}
            </li>
            <li>
            {userRole === "admin" && (
                <Link className="" href={"/manage-orders"}>
                  Admin Dashboard
                </Link>
            )}
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
          {userRole === "customer" && (
              <Link className="" href={"/my-orders"}>
                Customer Dashboard
              </Link>
          )}
          </li>
          <li>

          {userRole === "admin" && (
            <Link className="" href={"/manage-orders"}>
              Admin Dashboard
            </Link>
          )}
          </li>
          {/* {currentUser && <p>{currentUser.email}</p>} */}
        </ul>
      </div>

      <div className="navbar-end">
        {currentUser ? (
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        ) : (
          <button onClick={() => router.push("/login")} className="btn">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
