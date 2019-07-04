import {
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

const initialState = {
	searchField: ''
};

describe('searchRobots', () => {
	it('should return the initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual(initialState);
	});
	it('should handle CHANGE_SEARCHFIELD', () => {
		expect(
			reducers.searchRobots(initialState, {
				type: CHANGE_SEARCHFIELD,
				payload: 'abc'
			})
		).toEqual({
			searchField: 'abc'
		});
	});
});

describe('requestRobots', () => {
	const initialStateRobots = {
		robots: [],
		isPending: false
	};

	it('should return the initial state', () => {
		expect(reducers.requestRobots(initialState, {})).toEqual(initialState);
	});

	it('should handle REQUEST_ROBOTS_PENDING', () => {
		expect(
			reducers.requestRobots(initialState, {
				type: REQUEST_ROBOTS_PENDING
			})
		).toEqual({
			...initialState,
			isPending: true
		});
	});

	it('should handle REQUEST_ROBOTS_SUCCESS', () => {
		const mockRobots = [
			{ id: '123', name: 'name', email: 'email@gmail.com' }
		];
		expect(
			reducers.requestRobots(initialState, {
				type: REQUEST_ROBOTS_SUCCESS,
				payload: mockRobots
			})
		).toEqual({
			...initialState,
			robots: mockRobots,
			isPending: false
		});
	});

	it('should handle REQUEST_ROBOTS_FAILED', () => {
		const mockError = 'NOOOOOOOOOOO!';
		expect(
			reducers.requestRobots(initialState, {
				type: REQUEST_ROBOTS_FAILED,
				payload: mockError
			})
		).toEqual({
			...initialState,
			error: mockError
		});
	});
});
