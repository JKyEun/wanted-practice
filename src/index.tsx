import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-cycle
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

// eslint-disable-next-line import/prefer-default-export
export function render() {
  root.render(<App />);
}
