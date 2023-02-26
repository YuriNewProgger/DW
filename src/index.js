import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { fetchTodos } from './Redux/carSlice';
import { NotificationsProvider } from '@mantine/notifications';
import { getAuthUser, setUser, getHistory, setHistory, getUserHistory } from './Redux/userSlice';

//store.dispatch(fetchTodos)
{
  let token = localStorage.getItem('token');
  if(token){
    store.dispatch(getAuthUser(token)).unwrap().then(resp => {
      if(resp.status === 200){
        store.dispatch(setUser(resp.value));

        store.dispatch(getUserHistory(resp.value.id)).unwrap().then(respSecond => {
          if(respSecond.status === 200){
            store.dispatch(setHistory(respSecond.values));
          }
        });
      }
    });
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <NotificationsProvider>
        <App />
      </NotificationsProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
