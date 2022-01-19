import {cleanup, render, screen} from "@testing-library/react";
import React from "react";
import AppRouters from "../routes/Routers";
import {MemoryRouter} from "react-router-dom";

describe('Router', () => {
    afterEach(cleanup);
    it('Should navigate to login screen successfully', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <AppRouters/>
            </MemoryRouter>,
        );
        expect(screen.getByText(/User Name/i)).toBeInTheDocument()
    })
    it('Should navigate to counter screen successfully', () => {
        render(
            <MemoryRouter initialEntries={['/counter']}>
                <AppRouters/>
            </MemoryRouter>,
        );
        expect(screen.getByText(/Terpijit/i)).toBeInTheDocument()
    })
})
