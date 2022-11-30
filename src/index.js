import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import cookies from 'react-cookies';
import AuthContextProvider from './Context/AuthContext';
import UserDataContextProvider from './Context/PostContext';
// import { ChakraProvider, DarkMode, LightMode } from '@chakra-ui/react';
// import { myNewTheme } from "../src/theme/theme";




const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
 
  <ChakraProvider theme={myNewTheme}>
  <AuthContextProvider>
    <UserDataContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {cookies.load( 'token' ) ? <Route path='/posts' element={<App />} /> : <Route path='/posts' element={<Signin />} />}
      </Routes>
    </BrowserRouter>
    </UserDataContextProvider>
  </AuthContextProvider>
  </ChakraProvider>
);