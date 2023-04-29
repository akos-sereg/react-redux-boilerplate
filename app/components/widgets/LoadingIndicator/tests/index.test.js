import React from 'react';
import { render } from 'enzyme';
import LoadingIndicator from '../index.ts';

describe('<LoadingIndicator />', () => {
    it('should render 13 divs', () => {
        const renderedComponent = render(<LoadingIndicator />);
        expect(renderedComponent.length).toBe(1);
    });
});
