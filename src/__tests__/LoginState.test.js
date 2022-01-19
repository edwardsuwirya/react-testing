import React from "react";
import {act, renderHook} from "@testing-library/react-hooks";
import UseLogin from "../features/login/LoginState";

describe('Login State', () => {
    it('Should update state error', () => {
        const {result} = renderHook(() => UseLogin());
        const errorMessage = "error";
        act(() => {
            result.current.handleErrorChange(errorMessage)
        })

        expect(result.current.error).toBe(errorMessage);
    })
})
