import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import App from './common/containers/app.container';

// CSS
// require('normalize.css');
// require('./styles/main.css');

const render = (Component) => {
    ReactDOM.render((
        <Router history={hashHistory}>
            <AppContainer>
                <Route path="/" component={Component} />
            </AppContainer>
        </Router>
    ), document.getElementById('content'));
};

render(App)

if (module.hot) {
    module.hot.accept('./common/containers/app.container', () => {
        const NewApp = require('./common/containers/app.container').default;
        render(NewApp);
    });
}
