import {render, screen} from '@testing-library/react';
import HelpandSupport from '../index'

describe('Render HelpandSupport component', () =>{
    it('Should render helpandsupport page', () =>{
        render(<HelpandSupport/>);
        expect(screen.getByText("Help&Support page")).toBeInTheDocument();
    })
})