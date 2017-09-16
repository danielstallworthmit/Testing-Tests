import { expect } from '../test_helper';
import { SAVE_COMMENT, saveComment } from '../../src/actions';

describe('actions', () => {
    describe('saveComment', () => {
        it('has the correct SAVE_COMMENT type', () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });
        it('has correct payload', () => {
            const action = saveComment('new Comment');
            expect(action.payload).to.equal('new Comment');
        })
    })
})