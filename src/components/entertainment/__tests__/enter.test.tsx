import {render, screen} from '@testing-library/react';
import Entertainment from '..';


describe('Render Entertainment', () =>{
    it('Should render Entertainment', () =>{
        render(<Entertainment/>);
        expect(screen.getByText("Entertainment page")).toBeInTheDocument();
    })
})