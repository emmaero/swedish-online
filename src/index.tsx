import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './states/AuthProvider';
import { CourseProvider } from './states/CourseProvider';
import { UserProvider } from './states/UserProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <CourseProvider>
        <App />
        </CourseProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
