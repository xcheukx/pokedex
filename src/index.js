// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import App from './containers/App'
import Page from './containers/Page'
import storeConfig from './store/storeConfig'

const store = storeConfig();

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    {/* <App /> */}
    <Page />
  </Provider>,
  rootElement
)
registerServiceWorker();
