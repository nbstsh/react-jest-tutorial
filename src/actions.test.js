import * as actions from './actions';
import {
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
	const text = 'woo';
	const expectedAction = {
		type: CHANGE_SEARCHFIELD,
		payload: text
	};
	expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('handles requesting robots API', async () => {
	const store = mockStore();

	await store.dispatch(actions.requestRobots());
	const action = store.getActions();
	expect(action[0].type).toEqual(REQUEST_ROBOTS_PENDING);
	expect(action[1].type).toEqual(REQUEST_ROBOTS_SUCCESS);
	expect(action[1].payload).not.toBeNull();
});
