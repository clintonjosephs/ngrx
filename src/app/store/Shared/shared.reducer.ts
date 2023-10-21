import { Action, createReducer, on } from "@ngrx/store";
import { SharedState, initialState } from "./shared.state";
import { setLoadingSpinner } from "./shared.actions";

const _sharedReducer = createReducer(initialState, on(setLoadingSpinner, (state, action) => {
    return {
        state,
        showLoading: action.status
    }
}))

export function SharedReducer(state: SharedState | undefined, action: Action) {
    return _sharedReducer(state, action);
}