// @flow
import uuid from '../../util/Uuid';

export const CREATE_POST:string = 'CREATE_POST';
export const DELETE_POST:string = 'DELETE_POST';

type PostData = {
  title: string,
  body: string
}

export const createPost = (model: PostData) => ({
  type: CREATE_POST,
  model,
  id: uuid()
});

export const deletePost = (id: string) => ({
  type: DELETE_POST,
  id
});
