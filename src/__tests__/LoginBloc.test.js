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
        navigationMock.mockReturnValue({
            navigateTo: navigateToMock
        });

        useLoginMock.mockReturnValue({
            error: '',
            handleErrorChange: jest.fn()
        });
        useLoginEmptyMock.mockReturnValue({
            error: '',
            handleErrorChange: handleErrorChange
        });
    });
    afterEach(cleanup);

    it('Should Authenticate success', async () => {
        userAuthenticationMock.mockResolvedValue(true);
        repoMock.mockReturnValue(
            {
                userAuthentication: userAuthenticationMock
            }
        );
        await LoginBloc(repoMock, navigationMock, useLoginMock).onAuthenticate('dummyUser', 'dummyPassword');
        expect(userAuthenticationMock.mock.calls.length).toBe(1);
        expect(userAuthenticationMock).toHaveBeenCalledWith('dummyUser', 'dummyPassword')
        await expect(userAuthenticationMock()).resolves.toEqual(true)
        expect(navigateToMock.mock.calls.length).toBe(1);
    });
    it('Should Authenticate failed when required field is empty', async () => {
        userAuthenticationMock.mockResolvedValue(false);
        repoMock.mockReturnValue(
            {
                userAuthentication: userAuthenticationMock
            }
        );
        await LoginBloc(repoMock, navigationMock, useLoginEmptyMock).onAuthenticate('', '')
        await expect(userAuthenticationMock()).resolves.toEqual(false)
        expect(handleErrorChange.mock.calls.length).toBe(1);
    });
})
