// @flow
export const CREATE_POST:string = 'CREATE_POST';

type PostData = {
  title: string,
  body: string
}

export const createPost = (model: PostData) => ({
  type: CREATE_POST,
  model
});
