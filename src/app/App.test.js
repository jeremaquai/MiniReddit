import React from 'react';
import { screen, render, getByTestId } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

describe('RedditCreeper Project App', function() {
    

    it('renders a header', () => { 
        const {getByTitle} = render(
            <Provider store={store}>
              <App />
            </Provider>
          );
        expect(screen.getByTitle(/header/i));
    });

    it('renders a Navigation Bar', () => {
        const {getByRole} = render(
            <Provider store={store}>
                <App />
            </Provider>
        );   
        expect(screen.getByRole('navigation'))
    });

    it('renders a footer', () => {
        const { getByTitle } = render(
            <Provider store={store}>
              <App />
            </Provider>
          );
        expect(screen.getByTitle(/footer/i));
    });

});








