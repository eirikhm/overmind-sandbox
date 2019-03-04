import { OnInitialize } from '../index'

const onInitialize: OnInitialize = async ({ state, effects, actions}, overmind) => {

    console.log('OnInitialize::overmind',overmind);
}

export default onInitialize