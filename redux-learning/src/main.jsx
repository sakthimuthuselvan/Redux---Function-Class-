import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './AppFunctinal.jsx'
import App from './AppClassCom.jsx'

import store from './Store/Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
