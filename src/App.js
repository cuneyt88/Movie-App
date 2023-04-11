import React from "react";
import AppRouter from "./router/AppRouter";
import { userObserver } from "./auth/firebase";
import AuthContextProvide from "./context/AuthContextProvide";

const App = () => {
  

  return (
    <div className="bg-[#23242a]">
      <AuthContextProvide>
       <AppRouter/>
      </AuthContextProvide>
      
    </div>
  );
};

export default App;
