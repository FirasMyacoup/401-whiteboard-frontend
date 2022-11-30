import { render, screen, fireEvent } from "@testing-library/react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Post from "../components/Post";
import { AuthContextProvider } from "../context/AuthContext";
import { PostContextProvider } from "../context/PostContext";

test("renders the Signin", () => {
 render(
  <AuthContextProvider>
   <Signin/>
  </AuthContextProvider>
 );
 const linkElement = screen.getByText(/Signin/i);
 expect(linkElement).toBeInTheDocument();
});

test("renders the Signup", () => {
 render(
  <AuthContextProvider>
   <Signup />
  </AuthContextProvider>
 );
 const linkElement = screen.getByText(/Signup/i);
 expect(linkElement).toBeInTheDocument();
});

test("renders Post", () => {
 render(
  <AuthContextProvider>
   <PostContextProvider>
    <Post/>
   </PostContextProvider>
  </AuthContextProvider>
 );
 const linkElement = screen.getByText(/Post/i);
 expect(linkElement).toBeInTheDocument();
});