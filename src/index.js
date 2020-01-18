import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App'
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apollo/api'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
    , document.getElementById('root')
);
