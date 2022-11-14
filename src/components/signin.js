import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  useColorModeValue,
} from '@chakra-ui/react';

function Signin () {
    const { handleSignIn, setSignup } = useAuth();
    const formBackground = useColorModeValue('gray.100', 'gray.700');

   

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            bg={useColorModeValue('green.50', 'whiteAlpha.600')}>
            <Flex
                bg={formBackground}
                boxShadow={'lg'}
                p={12}>
                <Heading textAlign={'center'} fontSize={'medium'}>
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
                    <Button type="submit">
                        Sign in
                    </Button>
                </form>
                <Button
                    mt={6}
                    color={'blue'}
                
                    onClick={() => setSignup(true)}>
                    Sign up
                </Button>
                

                
            </Flex>
        </Flex>
    );

}


    
export default Signin;