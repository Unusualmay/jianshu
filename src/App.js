import React, {Component, Fragment} from 'react';
import {GlobalStyle} from './style';
import Header from './common/header';
import {Provider} from 'react-redux';
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <GlobalStyle/>
                    <Header/>
                </Fragment>
            </Provider>
        );
    }
}

export default App;
