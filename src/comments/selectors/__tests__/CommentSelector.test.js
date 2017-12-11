import { getCommentsForPostSelector } from '../CommentSelector';

describe('getCommentsForPostSelector', () => {
  it('get comments for post', () => {
    const state = {
      comments: [
        {
          postId: 1337
        },
        {
          postId: 11
        },
        { postId: 1337 }
      ]
    };

    expect(getCommentsForPostSelector(state, 1337)).toHaveLength(2)
  });
});
