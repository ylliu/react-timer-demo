import { render, fireEvent, getByText, getByTestId } from "@testing-library/react";
import React from "react";
import Timer from './timer';

describe('Timer', () => {
    it('should render a <div />', () => {
        const { container } = render(<Timer />);
        expect(container.querySelectorAll('div').length).toBeGreaterThan(1);
    })
    it('should render instances of the TimerButton component', () => {
        const { container } = render(<Timer />);
        expect(container.querySelectorAll('.button-container').length).toEqual(3);
    })

    it('invokes startTimer when the start button is clicked', () => {
        const spy = jest.spyOn(Timer.prototype, 'startTimer');
        const { getByText } = render(<Timer />);
        const button = getByText('Start');
        fireEvent.click(button);
        expect(spy).toHaveBeenCalled();
    })

    it('invokes stopTimer when the stop button is clicked', () => {
        const spy = jest.spyOn(Timer.prototype, 'stopTimer');
        const { getByText } = render(<Timer />);
        const button = getByText('Stop');
        fireEvent.click(button);
        expect(spy).toHaveBeenCalled();
    });

    it('invokes resetTimer when the reset button is clicked', () => {
        const spy = jest.spyOn(Timer.prototype, 'resetTimer');
        const { getByText } = render(<Timer />);
        const button = getByText('Reset');
        fireEvent.click(button);
        expect(spy).toHaveBeenCalled();
    });

    it('should change isOn state true when the start button is clicked', () => {
        const { container, } = render(<Timer />);
        const startButton = getByText(container, 'Start');
        fireEvent.click(startButton);
        const timer = getByTestId(container, 'timer');
        expect(timer.state.isOn).toBe(true);
    });

    it('should change isOn state false when the stop button is clicked', () => {
        const { container, } = render(<Timer />);
        const stopButton = getByText(container, 'Stop');
        fireEvent.click(stopButton);
        const timer = getByTestId(container, 'timer');
        expect(timer.state.isOn).toBe(false);
    });

    it('should change isOn state false when the reset button is clicked', () => {
        const { container, } = render(<Timer />);
        const stopButton = getByText(container, 'Reset');
        fireEvent.click(stopButton);
        const timer = getByTestId(container, 'timer');
        expect(timer.state.isOn).toBe(false);
        expect(timer.state.minutes).toEqual(25);
        expect(timer.state.seconds).toEqual(0);
    });

})