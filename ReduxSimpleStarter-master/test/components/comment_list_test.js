import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let component;
    beforeEach(() => {
        const props = { comments: ['New Comment', 'Other new comment'] };
        component = renderComponent(CommentList, null, props);
    });
    it('shows li for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });
    it('shows provided comments', () => {
        expect(component).to.contain('New Comment');
        expect(component).to.contain('Other new comment');
    })
})
