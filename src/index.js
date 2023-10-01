import React from 'react';
import {createRoot} from 'react-dom';

const element = (
    <p id='hello'>
        Hello, <span>React</span>
    </p>
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);