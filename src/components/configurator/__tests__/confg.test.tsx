import {render, screen} from '@testing-library/react';
import Configurator from '..';

describe('Render Configurator', () =>{
    it('Should render configuator', () =>{
        render(<Configurator/>);
        expect(screen.getByText("Configurator page")).toBeInTheDocument();
    })
})