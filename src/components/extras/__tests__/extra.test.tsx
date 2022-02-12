import {render, screen} from '@testing-library/react';
import Extra from '..';


describe('Render Extra', () =>{
    it('Should render Extra', () =>{
        render(<Extra/>);
        expect(screen.getByText("Extra's Page")).toBeInTheDocument();
    })
})