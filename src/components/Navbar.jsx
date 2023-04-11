import React, { useContext } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/icons/avatar.png"
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContextProvide";

const Navbar = () => {
  const {currentUser}= useContext(AuthContext)
  // const currentUser={displayName:"Cüneyt ARI"}

  return (
    <>
    <nav className="flex w-full flex-wrap items-center justify-between bg-neutral-900 py-3 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start fixed-top" data-te-navbar-ref>
      <div className="flex w-full items-center justify-between px-6">  
      
        {/* Navbar title */}
        <Link className="pr-2 text-2xl font-semibold text-white" to="/">Bee Movie App</Link>
      
      {/* Right elements */}
        <div className="relative flex items-center">
        
        {currentUser && (<h5 className="mr-2 capitalize">{currentUser?.displayName}</h5>)}
        {/* Second dropdown container */}
        <div className="relative" data-te-dropdown-ref>
          {/* Second dropdown trigger */}
          <span className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none" id="dropdownMenuButton2" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
            {/* User avatar */}
            <img src={currentUser?.photoURL || avatar} className="rounded-full" style={{height: '25px', width: '25px'}} alt="user" loading="lazy" />
          </span>
          {/* Second dropdown menu */}
          <ul className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
            {/* Second dropdown menu items */}
            <li>
              <Link className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" to="/register" data-te-dropdown-item-ref>Register</Link>
            </li>
            <li>
              <Link className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" to="/login" data-te-dropdown-item-ref>Login</Link>
            </li>
            <li>
              <span className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" role="button" 
              onClick={()=>logOut}
              data-te-dropdown-item-ref>Logout</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Right elements */}
    </div>
  </nav>

  <div >

  </div>
  
  </>
  );
};

export default Navbar;
