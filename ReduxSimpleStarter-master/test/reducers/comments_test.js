import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions';

describe('Comments Reducer', () => {
    it('handles actions with unknown type', () => {
        expect(commentReducer(undefined, {})).to.eql([]);
    });
    it('handles type of SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: 'new Comment' };
        expect(commentReducer([],action)).to.eql(['new Comment']);
    });
});