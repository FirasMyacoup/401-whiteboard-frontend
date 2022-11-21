import AddPostForm from "./components/Add-post-form";
import Post from "./components/Post";
import "./App.css";
import React, { useEffect } from "react";
import { Else, If, Then, When } from "react-if";
import { useAuth } from "./Context/AuthContext";
import Signin from "./components/signin";
import Signup from "./components/signup";

function App() {
 const { isAuth, signup, checkSignIn } = useAuth();
 useEffect(() => {
  checkSignIn();
 }, []);

 return (
  <div className="App">
   <When condition={isAuth}>
    <AddPostForm />
    <Post />
   </When>
   <When condition={!isAuth}>
    <If condition={signup}>
     <Then>
      <Signup />
     </Then>
     <Else>
      <Signin />
     </Else>
    </If>
   </When>
  </div>
 );
}

export default App;