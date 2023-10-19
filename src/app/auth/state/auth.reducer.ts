import { Action, createReducer, on } from '@ngrx/store';
import { AuthState, initialState } from './auth.state';
import { loginSuccess } from './auth.actions';

const _authReducer = createReducer(initialState, on(loginSuccess, (state, { user }) => {
    return {
        ...state,
        user: user
    }
}));

export function AuthReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}