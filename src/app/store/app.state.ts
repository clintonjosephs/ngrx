import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { Post } from "../models/post.model";
import { postsReducer } from "../posts/state/post.reducer";

export interface AppState {
    counter: CounterState;
    post: Post;
}


export const appReducer = {
    counter: counterReducer,
    posts: postsReducer
}