import {render, screen} from '@testing-library/react';
import Prepaid from '../index'

describe('Render Prepaid component', () =>{
    it('Should render Prepaid page', () =>{
        render(<Prepaid/>);
        expect(screen.getByText("PrePaid Page!")).toBeInTheDocument();
    })
})