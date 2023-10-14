import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.state';

const getPostsState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostsState, (state) => state.posts);

export const getPostById = createSelector(
  getPostsState,
  (state: PostState, props: { id: number }) => {
    return state.posts.find((post) => post.id === props.id)
  }
);
