import React from 'react';
import { 
    screen, 
    render, 
    getByTestId,
    getByText,
    getByRole
 } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import App from '../../app/App';
import SearchBar from './SearchBar';

describe('SearchBar component function', function() {
    it('renders a searchBar div', () => {
        const {getByTitle} = render(
            <SearchBar />
        );
        expect(screen.getByTitle(/searchBar/i));
    });
    it('renders something such as a button with the text Search', () => {
        const {getByText} = render(
            <SearchBar />
        );
        expect(screen.getByText(/Search/));
    });
    it('renders and imput textbox', () => {
        const { getByRole } = render(
            <SearchBar />
        );
        expect(screen.getByRole('textbox'));
    });
    it('renders a button', () => {
        const { getByRole } = render(
            <SearchBar />
        );
        expect(screen.getAllByRole('button'));
    });
});