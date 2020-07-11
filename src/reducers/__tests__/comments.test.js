import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/actionTypes';

describe('testing commentsReducer and action types', () => {
    it('handles actions of type SAVE_COMMENT', () => {
        const action = {
            type: SAVE_COMMENT,
            payload: 'New Comment'
        };

        const newState = commentsReducer([],action);

        expect(newState).toEqual(['New Comment']);
    });
    
});