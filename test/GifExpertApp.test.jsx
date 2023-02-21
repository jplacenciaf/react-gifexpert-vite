import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => { 

    test('Debe añadir una categoría no existente', () => {

        const inputValue = 'Simpson';

        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( screen.getByText(inputValue) ).toBeTruthy();

    });

    test('No debe añadir una categoría existente', () => {

        const inputValue = 'DragonBall';

        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( screen.getAllByText(inputValue).length ).toBe(1);

    });

});