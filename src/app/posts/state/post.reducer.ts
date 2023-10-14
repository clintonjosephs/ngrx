import { Action, createReducer, on } from '@ngrx/store';
import { PostState, initialState } from './post.state';
import { addPost, deletePost, updatePost } from './post.actions';

const _postsReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post = { ...action.post, id: state.posts.length + 1 };
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state, action) => {
    const updatedPosts = state.posts.map((post) =>
      post.id === action.post.id ? action.post : post
    );
    return {
      ...state,
      posts: updatedPosts,
    };
  }),
  on(deletePost, (state, action) => { 
    const updatedPosts = state.posts.filter((post) => post.id !== action.id);
    return {
      ...state,
      posts: updatedPosts,
    };
  }),
);

export function postsReducer(state: PostState | undefined, action: Action) {
  return _postsReducer(state, action);
}
