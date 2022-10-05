import { render, screen, fireEvent } from '@testing-library/react';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Post from '../components/Post';
import { AuthContextProvider } from '../Context/AuthContext';
import { PostContextProvider } from '../Context/PostContext';


test( 'renders Signin', () => {
    render( <AuthContextProvider><Signin /></AuthContextProvider> );
    const linkElement = screen.getByText( /Signin/i );
    expect( linkElement ).toBeInTheDocument();
} );

test( 'renders Signup', () => {
    render( <AuthContextProvider><Signup /></AuthContextProvider> );
    const linkElement = screen.getByText( /Signup/i );
    expect( linkElement ).toBeInTheDocument();
} );

test( 'renders Post', () => {
    render( <AuthContextProvider><PostContextProvider><Post /></PostContextProvider></AuthContextProvider> );
    const linkElement = screen.getByText( /Post/i );
    expect( linkElement ).toBeInTheDocument();
} );
