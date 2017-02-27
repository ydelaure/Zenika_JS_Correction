import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rulesReducer from '../reducers/rules-reducer'

const store = createStore(
  rulesReducer,
  applyMiddleware(
    thunkMiddleware,
  )
)

export default store
