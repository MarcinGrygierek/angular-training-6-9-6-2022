import {createReducer, on} from '@ngrx/store'
import { add, subtract } from './counter.actions';


export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(add, (state) => {
        return state + 1;
    }),
    on(subtract, (state) => {
        return state - 1;
    })
)