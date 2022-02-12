import {render, screen} from '@testing-library/react';
import Shop from '../index'

describe('Render Shop component', () =>{
    it('Should render Shop page', () =>{
        render(<Shop/>);
        expect(screen.getByText("Shop Page")).toBeInTheDocument();
    })
})