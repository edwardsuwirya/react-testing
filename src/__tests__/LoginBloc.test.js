import {cleanup} from "@testing-library/react";
import {LoginBloc} from "../features/login/LoginBloc";

describe('Login Bloc', () => {
    let repoMock = jest.fn();
    let userAuthenticationMock = jest.fn();

    let navigationMock = jest.fn();
    let navigateToMock = jest.fn();

    let useLoginMock = jest.fn();

    let useLoginEmptyMock = jest.fn();
    let handleErrorChange = jest.fn();
    beforeEach(() => {
        userAuthenticationMock.mockResolvedValue(true);
        repoMock.mockReturnValue(
            {
                userAuthentication: userAuthenticationMock
            }
        );
        navigationMock.mockReturnValue({
            navigateTo: navigateToMock
        });

        useLoginMock.mockReturnValue({
            userName: 'dummyUser',
            handleUserNameChange: jest.fn(),
            password: 'dummyPassword',
            handlePasswordChange: jest.fn(),
            error: '',
            handleErrorChange: jest.fn()
        });
        useLoginEmptyMock.mockReturnValue({
            userName: '',
            handleUserNameChange: jest.fn(),
            password: '',
            handlePasswordChange: jest.fn(),
            error: '',
            handleErrorChange: handleErrorChange
        });
    });
    afterEach(cleanup);

    it('Should Authenticate success', async () => {
        await LoginBloc(repoMock, navigationMock, useLoginMock).onAuthenticate();
        expect(userAuthenticationMock.mock.calls.length).toBe(1);
        expect(userAuthenticationMock).toHaveBeenCalledWith('dummyUser', 'dummyPassword')
        await expect(userAuthenticationMock()).resolves.toEqual(true)
        expect(navigateToMock.mock.calls.length).toBe(1);
    });
    it('Should Authenticate failed when required field is empty', () => {
        LoginBloc(repoMock, navigationMock, useLoginEmptyMock).onAuthenticate()
        expect(handleErrorChange.mock.calls.length).toBe(1);
    });
})
