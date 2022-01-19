import React from "react";
import {act, renderHook} from "@testing-library/react-hooks";
import UseLogin from "../features/login/LoginState";

describe('Login State', () => {
    it('Should update state user name', () => {
        const {result} = renderHook(() => UseLogin())
        const event = {
            target: {value: 'dummyUser'}
        };
        act(() => {
            result.current.handleUserNameChange(event)
        })

        expect(result.current.userName).toBe("dummyUser");
    })

    it('Should update state password', () => {
        const {result} = renderHook(() => UseLogin())
        const event = {
            target: {value: '1234'}
        };
        act(() => {
            result.current.handlePasswordChange(event)
        })

        expect(result.current.password).toBe("1234");
    })

    it('Should update state error', () => {
        const {result} = renderHook(() => UseLogin());
        const errorMessage = "error";
        act(() => {
            result.current.handleErrorChange(errorMessage)
        })

        expect(result.current.error).toBe(errorMessage);
    })
})
