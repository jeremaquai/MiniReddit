import React from 'react';
import { screen, render, getByTestId } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';


test('renders a header', () => {
    const {getByTitle} = render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    expect(screen.getByTitle(/header/i));
});

test('renders a Navigation Bar', () => {
    const {getByRole} = render(
        <Provider store={store}>
          <App />
        </Provider>
    );
    expect(screen.getByRole('navigation'))
});

test('renders a footer', () => {
    const { getByTitle } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    expect(screen.getByTitle(/footer/i));
});


