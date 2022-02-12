import {render, screen} from '@testing-library/react';
import Deals from '..';

describe('Render Deals', () =>{
    it('Should render deals', () =>{
        render(<Deals/>);
        expect(screen.getByText("Deals page")).toBeInTheDocument();
    })
})