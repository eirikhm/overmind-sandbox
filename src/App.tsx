import {createElement} from "react";
import { useOvermind } from './overmind';

export const App = () => {
    const {state,actions} = useOvermind();

    return (
        <div>
            <button onClick={() => actions.core.someCatchErrorAction()}>catchError</button>
            <button onClick={() => actions.core.someTryCatchAction()}>tryCatch</button>
        </div>
    )
}