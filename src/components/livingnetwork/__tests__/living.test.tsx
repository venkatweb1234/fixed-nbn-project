import {render, screen} from '@testing-library/react';
import LivingNetwork from '../index'

describe('Render LivingNetwork component', () =>{
    it('Should render LivingNetwork page', () =>{
        render(<LivingNetwork/>);
        expect(screen.getByText("Live Stock page")).toBeInTheDocument();
    })
})