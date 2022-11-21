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
import { Select } from '@chakra-ui/react'


function Signup () {
const { handleSignUp, setSignup } = useAuth();


return (
<Flex
align={'center'}
justify={'center'}

>
<Flex
direction={'column'}


>
<Heading textAlign={'center'} size={'lg'} fontWeight={'normal'}>
Sign up for an account
</Heading>
<form onSubmit={handleSignUp}>
<FormControl mt={6}>
    <FormLabel>Username</FormLabel>
    <Input
        type="text"
        name="username"
        placeholder="username"
        required
    />
</FormControl>
<FormControl mt={6}>
    <FormLabel>Email address</FormLabel>
    <Input
        type="email"
        name="email"
        placeholder="email"
        required
    />
</FormControl>
<FormControl mt={6}>
    <FormLabel>Password</FormLabel>
    <Input
        type="password"
        name="password"
        placeholder="password"
        required
    />
</FormControl>
<FormControl mt={6}>
    <FormLabel>Confirm Password</FormLabel>
    <Input
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
        required
    />
</FormControl>
<FormControl mt={6}>
    <FormLabel>Role</FormLabel>
    <Select name="role" placeholder="Select option">
        <option value="user">User</option>
        <option value="admin">Admin</option>
    </Select>
</FormControl>
<Button
    type="submit"
    mt={4}
    w={'full'}
    bgGradient="linear(to-r, white.500,blue.500)"
    color={'white'}
    _hover={{
        bgGradient: 'linear(to-r, red.500,yellow.500)',
        boxShadow: 'xl',
    }}
>
    Sign up
</Button>
</form>
<Button
mt={4}
w={'full'}
color={'white'}
_hover={{
    bgGradient: 'linear(to-r, green.500,blue.500)',
}}
    onClick={() => setSignup( false )} 
>
Cancel
</Button>

</Flex>
</Flex>
);
};


export default Signup;