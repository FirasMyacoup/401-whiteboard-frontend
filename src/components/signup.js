import { useAuth } from "../context/AuthContext";
import React from 'react';
// import {
// Flex,
// Heading,
// Input,
// Button,
// FormControl,
// FormLabel,
// useColorModeValue,
// useColorMode,
// Switch,
// } from '@chakra-ui/react';
// import { Select } from '@chakra-ui/react'


function Signup () {
const { handleSignUp, setSignup } = useAuth();
const formBackground = useColorModeValue('blue.50', 'blue.800', 'light');
const { toggleColorMode } = useColorMode();


return (
<Flex
// minH={'100vh'}
// align={'center'}
// justify={'center'}
// bg={useColorModeValue('blue.100', 'blue.900', 'light')}
>
<Flex
// direction={'column'}
// rounded={'lg'}
// bg={formBackground}
// boxShadow={'lg'}
// p={12}
>
<Heading textAlign={'center'} size={'lg'} fontWeight={'normal'}>
Sign up here
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
<FormControl /*mt={6}*/>
<FormLabel>Email</FormLabel>
<Input
type="email"
name="email"
placeholder="email"
required
/>
</FormControl>
<FormControl /*mt={6}*/>
<FormLabel>Password</FormLabel>
<Input
type="password"
name="password"
placeholder="password"
required
/>
</FormControl>
<FormControl /*mt={6}*/>
<FormLabel>Confirm Password</FormLabel>
<Input
type="password"
name="confirmPassword"
placeholder="confirm password"
required
/>
</FormControl>
<FormControl /*mt={6}*/>
<FormLabel>Roles</FormLabel>
<Select name="role" placeholder="Select option">
<option value="user">User</option>
<option value="admin">Admin</option>
</Select>
</FormControl>
<Button
type="submit"
// mt={4}
// w={'full'}
// bgGradient="linear(to-r, yellow.500,blue.500)"
// color={'white'}
// _hover={{
// bgGradient: 'linear(to-r, yellow.500,blue.500)',
// boxShadow: 'xl',
// }}
>
Sign up 
</Button>
</form>
<Button
// mt={4}
// w={'full'}
// bgGradient="linear(to-r, yellow.500,blue.500)"
// color={'white'}
// _hover={{
// bgGradient: 'linear(to-r, yellow.500,blue.500)',
// boxShadow: 'xl',
// }}
onClick={() => setSignup( false )} 
>
Cancel signUp
</Button>

<FormControl /*display="flex" alignItems="center"*/>
<FormLabel /*htmlFor="dark_mode" mb="0"*/>
darkmode
</FormLabel>
<Switch
// id="dark_mode"
// colorScheme="teal"
// size="lg"
// onChange={toggleColorMode}
/>
</FormControl>

</Flex>
</Flex>
);
};


export default Signup;