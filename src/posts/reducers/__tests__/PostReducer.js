import reduce from '../PostReducer';
import { createPost, deletePost } from '../../actions/PostActions';

describe('PostReducer', () => {
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

  it('should delete one post', () => {
    const posts = [
      {
        id: 1,
        title: 'Dude'
      },
      {
        id: 2,
        title: 'Sweet'
      }
    ];

    const state = reduce(posts, deletePost(1));
    expect(state).toEqual([{ id: 2, title: 'Sweet' }]);
  });
});
