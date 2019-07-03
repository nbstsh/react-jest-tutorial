import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper, mockProps;
const defaultMockProps = {
	onRequestRobots: jest.fn(),
	robots: [],
	searchField: '',
	isPending: false
};
beforeEach(() => {
	mockProps = defaultMockProps;
});

const exec = () => {
	wrapper = shallow(<MainPage {...mockProps} />);
};

afterEach(() => {
	mockProps = null;
	wrapper = null;
});

it('renders MainPage without crashing', () => {
	exec();
	expect(wrapper).toMatchSnapshot();
});

it('renders Loading text when isPending is true', () => {
	mockProps.isPending = true;
	exec();
	expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly1', () => {
	const mockRobots = [
		{
			id: 3,
			name: 'John',
			email: 'john@gmial.com'
		}
	];
	mockProps.searchField = 'a';
	mockProps.robots = mockRobots;

	exec();
	expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly2', () => {
	const mockRobots = [
		{
			id: 3,
			name: 'John',
			email: 'john@gmial.com'
		}
	];
	mockProps.searchField = 'J';
	mockProps.robots = mockRobots;

	exec();
	expect(wrapper.instance().filterRobots()).toEqual(mockRobots);
});
