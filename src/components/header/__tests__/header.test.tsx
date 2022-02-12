import {fireEvent, render, screen} from '@testing-library/react'
import Header from '..'
global.alert = jest.fn();
describe('Render Header Component', () =>{
    it('Should render header component image', () =>{
        render(<Header />);
        expect(screen.getByAltText('Logo')).toBeInTheDocument();
        expect(screen.getByText('Internet on day dot')).toBeInTheDocument();
        expect(screen.getByText('It starts with 4G, 5G and NBN home internet that gets you going from day one')).toBeInTheDocument();
        expect(screen.getByText('Find out more')).toBeInTheDocument();
    });

    it('Should Render Modal compoent', () =>{
        render(<Header />)
        const header = screen.getByText('T&Cs apply');
        fireEvent.click(header);
        expect(global.alert).toHaveBeenCalledTimes(1);
    })
})