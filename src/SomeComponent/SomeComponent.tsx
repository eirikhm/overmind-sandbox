import {createElement} from "react";
import { useOvermind } from '../overmind';

export const SomeComponent = () => {
    const {state} = useOvermind();

    return (
        <div>
            <h1>{state.core.someValue}</h1>
        </div>
    )
}