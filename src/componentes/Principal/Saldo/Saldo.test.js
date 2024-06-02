import { render, screen } from "@testing-library/react";
import Saldo from "./index";

describe('Componente <Saldo />', () => { 
    test('Deve renderizar o saldo com valor monetário', () => {
        render(<Saldo saldo={100} />)
        const saldo = screen.getByTestId('Saldo')
        expect(saldo).toHaveTextContent('R$ 100')
    })
})