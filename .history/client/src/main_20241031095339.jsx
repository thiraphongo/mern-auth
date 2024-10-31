import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.jsx'
import { store } from './redux/store.js'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)