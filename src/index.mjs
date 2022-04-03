import App from './app.mjs'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store.mjs'

addEventListener('DOMContentLoaded', () => {
  const node = document.createElement('div')
  const root = createRoot(node)
  document.body.appendChild(node)
  root.render(<Provider store={store}>
    <App />
  </Provider>)
})
