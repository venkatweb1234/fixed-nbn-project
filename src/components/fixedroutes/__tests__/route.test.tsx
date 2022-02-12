import { screen, render } from "@testing-library/react";
import FixedRoutes from "..";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createStore } from "redux";
const MockCompoent = ({id}: {id?:string}) =>{
  return <div data-testid={id}></div>
  }
  const mockEmptynbnProducts = {
    data: {
        plans: [],
  },
};
  const MockRoutes = [
      {
          path:'/products',
          element:MockCompoent,
      },
      {
          path:'/products/:id',
          element:MockCompoent,
          props:{id:'2'}
      }
  ]
  
  describe('Category Route compoent', () =>{
      it('Should render the routes', () =>{
          render(
            <Provider store={createStore(() => mockEmptynbnProducts)}>
              <FixedRoutes /></Provider>
         )
          expect(screen.getByTestId('2')).toBeInTheDocument()
      })
  })