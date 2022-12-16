import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from "react";
import { render, getByTestId } from "@testing-library/react";

import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import TestComponent from "./test";

Enzyme.configure({ adapter: new Adapter() });


describe('Test', () => {
    // it('should read test component state isOn', () => {
    //     const wrapper = render(<TestComponent />);
    //     console.log(wrapper);
    //     // expect(container.state.isOn).toBe(true);
    // })

    it('should read test component state isOn using enzyme', () => {
        const wrapper = mount(<TestComponent />);
        expect(wrapper.state('isOn')).toBe(true);
    })

    // it('should have isOn state set to true', () => {
    //     // Arrange
    //     const { container } = render(<TestComponent />);

    //     // Assert
    //     const testComponent = getByTestId(container, 'test-component');
    //     console.log(testComponent);
    //     expect(testComponent.state.isOn).toBe(true);
    // });
})