import React, {
    Component,
} from 'react'
import {Provider} from 'react-redux'
import reducers from './reducers'
import {createStore} from 'redux'
import App from './components/App'

const store = createStore(reducers);

export default class Root extends Component {

    render() {
        console.log('next state',store.getState())
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
