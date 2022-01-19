import React from 'react';
import {cleanup, fireEvent, render,screen} from '@testing-library/react';
import LoginScreen from "../features/login/LoginScreen";


describe('Login Feature', () => {
    afterEach(cleanup);
    it('Should Login successfully', () => {
        const bloc = jest.fn();
        const onAuthenticateMock = jest.fn();
        bloc.mockReturnValue({
            userName: '',
            password: '',
            handleUserNameChange: jest.fn(),
            handlePasswordChange: jest.fn(),
            onAuthenticate:onAuthenticateMock,
            error:''
        });
        render(
            <LoginScreen bloc={bloc} />,
        );
        fireEvent.click(screen.getByText('Login'));
        expect(screen.queryByText('All field is required')).toBeNull();
        expect(onAuthenticateMock.mock.calls.length).toBe(1);

    });

    it('Should show error when error state is not empty', () => {
        const bloc = jest.fn();
        const onAuthenticateMock = jest.fn();
        bloc.mockReturnValue({
            userName: '',
            password: '',
            handleUserNameChange: jest.fn(),
            handlePasswordChange: jest.fn(),
            onAuthenticate:onAuthenticateMock,
            error:'All field is required'
        });
        render(
            <LoginScreen bloc={bloc} />,
        );
        fireEvent.click(screen.getByText('Login'));
        expect(onAuthenticateMock.mock.calls.length).toBe(1);
        expect(screen.getByText('All field is required')).toBeInTheDocument();
    });
});

