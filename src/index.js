import {bindActionCreators, createStore} from 'redux';
import * as actions from './actions';
import reducer from "./reducer";

const store = createStore(reducer);
const {dispatch} = store;

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);