import React from "react";
import { render } from "@testing-library/react";
import TimerButton from './timerbutton';
describe('timer button', () => {
    it('should render a <div />', () => {
        const { container } = render(<TimerButton
            buttonAction={jest.fn()}
            buttonValue={""}
        />);
        expect(container.querySelectorAll('div').length).toEqual(1);
    })
})