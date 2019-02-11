import { Operator } from "../index";
import { action, pipe, } from 'overmind';

export const someAction: Operator<string> = pipe(
    action(() => console.log('Some action')),
);