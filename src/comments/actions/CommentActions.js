// @flow
export const CREATE_COMMENT: string = 'CREATE_COMMENT';

export const createComment = (text: string, postId: string) => ({
  type: CREATE_COMMENT,
  text,
  postId
});
