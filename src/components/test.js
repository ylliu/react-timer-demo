import React, { useState } from 'react';

const TestComponent = () => {
    const [isOn, setIsOn] = useState(true);

    return (
        <div data-testid="test-component"></div>
    );
};

export default TestComponent;