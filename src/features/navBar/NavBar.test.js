import NavBar from "./NavBar";
import React from 'react';
import { 
    screen, 
    render, 
    getByTestId,
    getByText,
    getByRole
 } from '@testing-library/react';
 import { Provider } from "react-redux";
 import App from "../../app/App";
 import { store } from "../../app/store";

describe('NavBar component function', function() {
    it('renders a nav element', () => {
        const { getByRole } = render(
            <Provider store={store}>
              <App />
            </Provider>
        );
        expect(screen.getByRole(/navigation/))
    });
});