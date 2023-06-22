import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App.jsx'
import Reducers from './Reducers.js'


const store = createStore(Reducers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  </React.StrictMode>,
)
