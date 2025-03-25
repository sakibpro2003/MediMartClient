"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { usePathname } from "next/navigation"; // usePathname hook for Next.js 13+ app directory
import { logout } from "@/services/AuthService";
import Link from "next/link";
import clsx from "clsx"; // Make sure to install this

const Navbar = () => {
  const user = useUser();
  const pathname = usePathname(); // Use the pathname hook instead of router

  const [currentUser, setCurrentUser] = useState(user?.user || null);
  const [userRole, setUserRole] = useState(user?.user?.role || undefined);

  useEffect(() => {
    setCurrentUser(user?.user);
    setUserRole(user?.user?.role);
  }, [user?.user]);

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    setUserRole(undefined);
    // Redirect to login page after logout
    window.location.href = "/login";
  };

  // Function to apply green color to the active link
  const getLinkClass = (link: string) => {
    return clsx({
      "btn btn-sm": pathname === link, // Green for active link
      "text-black": pathname !== link,     // Black for inactive link
    });
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
              <Link href="/" className={getLinkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className={getLinkClass("/products")}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className={getLinkClass("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link href="/cart" className={getLinkClass("/cart")}>
                Cart
              </Link>
            </li>
            <li>
              {userRole === "customer" && (
                <Link className={getLinkClass("/my-orders")} href="/my-orders">
                  Customer Dashboard
                </Link>
              )}
            </li>
            <li>
              {userRole === "admin" && (
                <Link className={getLinkClass("/manage-orders")} href="/manage-orders">
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
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className={getLinkClass("/products")}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className={getLinkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/cart" className={getLinkClass("/cart")}>
              Cart
            </Link>
          </li>
          <li>
            {userRole === "customer" && (
              <Link className={getLinkClass("/my-orders")} href="/my-orders">
                Customer Dashboard
              </Link>
            )}
          </li>
          <li>
            {userRole === "admin" && (
              <Link className={getLinkClass("/manage-orders")} href="/manage-orders">
                Admin Dashboard
              </Link>
            )}
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {currentUser ? (
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        ) : (
          <button onClick={() => window.location.href = "/login"} className="btn">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
