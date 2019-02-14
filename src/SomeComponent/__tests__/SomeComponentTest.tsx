import { createElement } from "react";
import { mount } from 'enzyme';


import { createOvermindMock } from 'overmind';

import { Provider } from 'overmind-react';
import { config } from '../../overmind/config';
import { SomeComponent } from '../SomeComponent';

describe('Grid', () => {

    test('shows empty screen', async () => {
        const mock = createOvermindMock(config);
        const component = mount(
            <Provider value={mock}>
                <SomeComponent></SomeComponent>
            </Provider>
        );

        expect(component.find('h1').text()).toBe('first')
        await mock.actions.core.someAction();
        expect(component.find('h1').text()).toBe('FOO')

    });


});