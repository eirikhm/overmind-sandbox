import { createElement } from 'react';
import { render } from 'react-dom';
import { Overmind } from 'overmind'



import { Provider } from 'overmind-react'
import { config } from './overmind/config';


const overmind = new Overmind(config)



render(
    <Provider value={overmind}>
        <div>
            <h1>overmind-sandbox</h1>
        </div>
    </Provider>, document.getElementById('root'));