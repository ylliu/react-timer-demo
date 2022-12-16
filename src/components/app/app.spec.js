import React from "react";
import { render, cleanup } from '@testing-library/react'
import App from './app'


describe('App', () => {
    let container;

    it('should render a <div />', () => {
        const { container } = render(<App />);
        expect(container.querySelectorAll('div').length).not.toBeNull();
        cleanup();
    })

    it("should render the timer component", () => {
        const { queryByTestId } = render(<App />);
        expect(queryByTestId('timer')).not.toBeNull();
        cleanup();
    })
    
})