import { h } from 'preact';
import { act } from 'preact/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
configure({ adapter: new Adapter() });

import Header from '../src/components/header'

// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('<Header />', () => {
    test('Logo contents are defined as expected', () => {
        const context = shallow(<Header />);
        expect(context.find('h1').text()).toBe('Daniel Țună');
        expect(context.find('h5').text()).toBe('personal space');
    });
});
