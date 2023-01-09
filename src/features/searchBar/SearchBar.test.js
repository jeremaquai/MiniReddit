import React from 'react';
import { 
    screen, 
    render, 
    getByTestId,
    getByText,
    getByRole
 } from '@testing-library/react';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import App from '../../app/App';
import { store } from '../../app/store';

describe('SearchBar component function', function() {
    it('renders a searchBar div', () => {
        const {getByTitle} = render(
            <Provider store={store}>
              <App />
            </Provider>
        );
        expect(screen.getByTitle(/searchBar/i));
    });
    it('renders something such as a button with the text Search', () => {
        const {getByText} = render(
            <Provider store={store}>
              <App />
            </Provider>
        );
        expect(screen.getByText(/Search/));
    });
    it('renders and imput textbox', () => {
        const { getByRole } = render(
            <Provider store={store}>
              <App />
            </Provider>
        );
        expect(screen.getByRole('textbox'));
    });
    it('renders a button', () => {
        const { getByRole } = render(
            <Provider store={store}>
              <App />
            </Provider>
        );
        expect(screen.getAllByRole('button'));
    });
});