import reduce from '../PostReducer';
import { createPost } from '../../actions/PostActions';

describe('Create post', () => {
  it('should add post', () => {
    const action = createPost({ title: 'Tjena bloggen', body: 'Lorem Ipsum' });
    const state = reduce(undefined, action);
    expect(state).toHaveLength(1);
    const [record] = state;
    expect(record.title).toBe('Tjena bloggen');
    expect(record.body).toBe('Lorem Ipsum');
    expect(record.date).toBeDefined();
    expect(record.id).toBeDefined();
  });
});
