import { useAuth } from "../Context/AuthContext";
import React from "react";
import {Flex,Heading,Input,Button,FormControl,FormLabel,useColorModeValue,useColorMode,Switch} from "@chakra-ui/react";

function Signin() {
 const { handleSignIn, setSignup } = useAuth();
 const { toggleColorMode } = useColorMode();

 return (
  <Flex
   align={"center"}
   justify={"center"}
  >
   <Flex
    direction={"column"}
    p={12}
   >
    <Heading textAlign={"center"} fontSize={"6xl"}>
     Sign in
    </Heading>
    <form onSubmit={handleSignIn}>
     <FormControl mt={6}>
      <FormLabel>Username</FormLabel>
      <Input name="username" placeholder="username" />
     </FormControl>
     <FormControl mt={6}>
      <FormLabel>Password</FormLabel>
      <Input name="password" type="password" placeholder="password" />
     </FormControl>
     <Button
      type="submit"
      width={"full"}
      color={"blue"}
     >
      Sign in
     </Button>
    </form>
    <Button
     mt={4}
     w={"full"}
     color={"white"}
     onClick={() => setSignup(true)}>
     Sign up </Button>

    <FormControl display="flex" alignItems="center">
    </FormControl>                                                                          
   </Flex>
  </Flex>
 );
}

export default Signin;