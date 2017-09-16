import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });
  it('contains comment box', () => {
    // expect(component).to.contain('React simple starter');
    expect(component.find('.comment-box')).to.exist;
  });
  it('shows list of comments', () => {
    expect(component.find('.comment-list')).to.exist;
  });
})

