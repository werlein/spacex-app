import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from '../../redux/rocket/rocket.reducer';

test('renders react App div element', () => {
  const store = configureStore({ reducer: { rocket: rocketReducer} })
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const appDiv = screen.getByTestId('app');
  expect(appDiv).toBeInTheDocument();
});
