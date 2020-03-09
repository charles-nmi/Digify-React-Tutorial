import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

/* Comment line 7 then uncomment lines commented with `//` below to try the code samples. */

/* 1_jsx */

// import './tutorial/1_jsx';



/* 2_class-components */

// import { ClassComponent } from './tutorial/2_class-components';
// ReactDOM.render(<ClassComponent name="Digify" isMorning={true}/>, document.getElementById('root'));



/* 3_function-component */

// import { FunctionComponent } from './tutorial/3_function-component';
// ReactDOM.render(<FunctionComponent name="Digify" isMorning={true}/>, document.getElementById('root'));



/* 4_components-in-components */

// import { Parent } from './tutorial/4_components-in-components';
// ReactDOM.render(<Parent/>, document.getElementById('root'));



/* 5_components-with-children */

// import { Parent } from './tutorial/5_components-with-children';
// ReactDOM.render(<Parent/>, document.getElementById('root'));



/* 6_states */

// import { ComponentWithState } from './tutorial/6_states';
// ReactDOM.render(<ComponentWithState isMorning={true}/>, document.getElementById('root'));



/* 7_state_hook */

// import { ComponentWithState } from './tutorial/7_state_hook';
// ReactDOM.render(<ComponentWithState isMorning={true}/>, document.getElementById('root'));



/* 8_refs */
// import { Refs } from './tutorial/8_refs';
// ReactDOM.render(<Refs/>, document.getElementById('root'));



/* 9_controlled_components */
// import { ControlledForm } from './tutorial/9_controlled_components';
// ReactDOM.render(<ControlledForm/>, document.getElementById('root'));



/* 10_uncontrolled_components */
// import { UncontrolledForm } from './tutorial/10_uncontrolled_components';
// ReactDOM.render(<UncontrolledForm/>, document.getElementById('root'));



/* 11_effects */
// import { Effects } from './tutorial/11_effects';
// ReactDOM.render(<Effects/>, document.getElementById('root'));



/* 12_passing_down_states */
// import { Page } from './tutorial/12_passing_down_states';
// ReactDOM.render(<Page/>, document.getElementById('root'));



/* 13_context */
// import { Page } from './tutorial/13_context';
// ReactDOM.render(<Page/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
