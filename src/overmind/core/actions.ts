import { Operator } from "../index";
import { action, pipe,map, catchError, tryCatch } from 'overmind';

export const someCatchErrorAction: Operator<void> = pipe(
    action(({ state }) => console.log('Begin')),
    action(({ effects }) => effects.core.myEffect.rejectingMethod()),
    catchError(({ state }, error:any) => {
        console.log('-- catchError', error)
        return;
    }),
    action(({ state }) => console.log('Done')),

);

export const someTryCatchAction: Operator<void, any> = pipe(
    action(({ state }) => console.log('Begin')),
    tryCatch({
        try: pipe(
            map(({ effects }) => effects.core.myEffect.rejectingMethod()) // works if using action instead of map here.
        ),
        catch: pipe(
            action(({ state }, error) => {
                console.log('-- tryCatch   ', error)
                return;
            }),
        )
    }),
    action(({ state }) => console.log('Done')),
);