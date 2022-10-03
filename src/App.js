import AddPostForm from "./components/Add-post-form";
import Post from "./components/Post";
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
        <AddPostForm />
        <Post />
    </div>
  );
}

export default App;