import React from "react";
import AppRouter from "./router/AppRouter";
import { userObserver } from "./auth/firebase";
import AuthContextProvide from "./context/AuthContextProvide";
import { ToastContainer } from "react-toastify";

const App = () => {
  

  return (
    <div className="bg-grey-100 dark:bg-[#23242a]">
      <AuthContextProvide>
       <AppRouter/>
       <ToastContainer/>
      </AuthContextProvide>
      
    </div>
  );
};

export default App;
