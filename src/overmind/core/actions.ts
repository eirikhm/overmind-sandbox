import { Operator } from "../index";
import { action, pipe, } from 'overmind';

export const someAction: Operator<void> = pipe(
    action(({state}) => state.core.someValue = 'FOO'),
);