import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import FormContextProvider from './components/form.context';

ReactDOM.render(
    <FormContextProvider>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </FormContextProvider>,
    document.getElementById('root')
);
