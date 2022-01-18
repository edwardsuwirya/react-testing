import React from 'react';
import {cleanup, fireEvent, render,screen} from '@testing-library/react';
import Counter from "../features/counter/Counter";

afterEach(cleanup);
it('Output component should render correctly', () => {
    render(
        <Counter />,
    );
    expect(screen.getByText('Plus')).toBeInTheDocument();
    expect(screen.getByText('Minus')).toBeInTheDocument();
    expect(screen.getByText(/Terpijit/i)).toBeInTheDocument();

});

it('Output Counter changes the text after button increment click', () => {
    render(
        <Counter />,
    );
    fireEvent.click(screen.getByText('Plus'));
    expect(screen.getByText(/1/i)).toBeTruthy();

    fireEvent.click(screen.getByText('Plus'));
    expect(screen.getByText(/2/i)).toBeTruthy();
});
it('Output Counter changes the text after button decrement click', () => {
    render(
        <Counter />,
    );
    fireEvent.click(screen.getByText('Minus'));
    expect(screen.getByText(/-1/i)).toBeTruthy();
});
