import React from 'react'
import Routes from './router';
import Header from './components/common/header';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import techinfomasterReducer from './reducers'
import { rootSaga } from './sagas/saga.js'
import createSagaMiddleware from 'redux-saga'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, browserHistory } from 'react-router-dom'
import '../css/bootstrap.css'
import '../css/app.less'
import Footer from './components/common/footer'
import { API_URL } from './constants/constants'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(techinfomasterReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Header/>
        <div className='row'>
          <div className='col-md-12'>
            <main>
              <Routes />
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>
)
ReactDOM.render(
  <App />
  , document.getElementById('container')
)
