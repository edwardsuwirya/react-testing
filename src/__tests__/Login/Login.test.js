import React from 'react';
import {cleanup, fireEvent, render, screen, waitFor} from '@testing-library/react';
import LoginScreen from "../../features/login/LoginScreen";


describe('Login Feature', () => {
    afterEach(cleanup);
    it('Should Login successfully', async () => {
        const bloc = jest.fn();
        const onAuthenticateMock = jest.fn();
        bloc.mockReturnValue({
            onAuthenticate: onAuthenticateMock,
            error: ''
        });
        render(
            <LoginScreen bloc={bloc}/>
        )

        fireEvent.change(screen.getByPlaceholderText('user name'), {target: {value: 'dummyuser'}});
        fireEvent.change(screen.getByPlaceholderText('password'), {target: {value: 'dummypass'}});
        fireEvent.click(screen.getByText('Login'));

        await waitFor(() => {
            expect(onAuthenticateMock.mock.calls.length).toBe(1);
            expect(onAuthenticateMock).toHaveBeenCalledWith('dummyuser', 'dummypass');
            expect(screen.queryByText('Required!')).toBeNull();
        });

    });

    it('Should show error when error state is not empty', async () => {
        const bloc = jest.fn();
        const onAuthenticateMock = jest.fn();
        bloc.mockReturnValue({
            onAuthenticate: onAuthenticateMock,
            error: 'All field is required'
        });
        render(
            <LoginScreen bloc={bloc}/>,
        );

        fireEvent.change(screen.getByPlaceholderText('user name'), {target: {value: 'dummyuser'}});
        fireEvent.change(screen.getByPlaceholderText('password'), {target: {value: 'dummypass'}});
        fireEvent.click(screen.getByText('Login'));
        await waitFor(() => {
            expect(onAuthenticateMock.mock.calls.length).toBe(1);
            expect(onAuthenticateMock).toHaveBeenCalledWith('dummyuser', 'dummypass');
            expect(screen.getByText('All field is required')).toBeInTheDocument();
        });

    });
});

