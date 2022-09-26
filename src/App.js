import "./App.css";
import "./App.css";
import Post from "./components/Post";
import AddPostForm from "./components/Add-post-form";
import { useState } from "react";



function App() {
  
  const [rerender, setRerender] = useState(false);
       const handleRerender = () => {
       setRerender(!rerender);
      };
  
  return (
    <div className="App">
       
        <AddPostForm getData={handleRerender}/>
         <Post rerender={rerender}/>
         
    </div>
  );
}

export default App;