import { render, screen, fireEvent } from '@testing-library/react';
import Signin from '../components/Signin';
import { LoginProvider } from '../context/loginContext';


describe('Login Context', () => {
    it('should render the login form', () => {
        render(
            <LoginProvider>
                <Signin />
            </LoginProvider>
        );
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
    });
    it('should login a user', () => {
        render(
            <LoginProvider>
                <Signin />
            </LoginProvider>
        );
        fireEvent.change(screen.getByLabelText('Username'), {
            target: { value: 'admin' },
        });
        fireEvent.change(screen.getByLabelText('Password'), {
            target: { value: 'password' },
        });
        fireEvent.click(screen.getByText('SignIn'));
        expect(screen.getByText('Invalid Login')).toBeInTheDocument();
    });
});
