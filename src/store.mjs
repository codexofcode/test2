import { configureStore } from '@reduxjs/toolkit'
import db from './dbSlice.mjs'

export default configureStore({
  reducer: {
    db
  }
})