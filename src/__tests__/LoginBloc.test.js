import {cleanup} from "@testing-library/react";
import {LoginBloc} from "../features/login/LoginBloc";
import {renderHook, act} from '@testing-library/react-hooks'

afterEach(cleanup);

describe('Login Bloc', () => {
    let repoMock = jest.fn();

    beforeEach(() => {
        repoMock.mockReturnValue(
            {
                userAuthentication: jest.fn()
            }
        )
    })

    it('Should Authenticate success', () => {
        const {result} = renderHook(() => LoginBloc(repoMock));
        act(() => {
            result.current.onAuthenticate('dummyUser', 'dummyPassword')
        })
        expect(result.current.error).toBe("");
    });
    it('Should Authenticate failed when required field is empty', () => {
        const {result} = renderHook(() => LoginBloc(repoMock));
        act(() => {
            result.current.onAuthenticate('', '')
        })

        expect(result.current.error).not.toBe("");
    });

    it('Should change state user name', () => {
        const event = {
            target: {value: 'dummyUser'}
        };
        const {result} = renderHook(() => LoginBloc(repoMock));
        act(() => {
            result.current.handleUserNameChange(event)
        })

        expect(result.current.userName).toBe("dummyUser");
    });
})
