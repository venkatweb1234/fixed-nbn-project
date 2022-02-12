import {render, screen} from '@testing-library/react';
import Mobile from '../index'

describe('Render Mobile component', () =>{
    it('Should render Mobile page', () =>{
        render(<Mobile/>);
        expect(screen.getByText("Mobile Page")).toBeInTheDocument();
    })
})