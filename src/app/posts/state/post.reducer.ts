import { Action, createReducer } from "@ngrx/store";
import { PostState, initialState } from "./post.state";


const _postsReducer = createReducer(initialState);


export function postsReducer(state: PostState | undefined, action: Action) {
    return _postsReducer(state, action);
  }
  