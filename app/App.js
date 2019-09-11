// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {Provider} from 'react-redux'
import {store} from './store'
import AppContainer from './navigations/AppContainer'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        )
    }
}

export default App