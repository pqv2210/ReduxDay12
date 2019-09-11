// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer'

export const store = createStore(rootReducer)