import { render, screen } from "@testing-library/react";
import Transacaoes from "./index";
import estilos from '../Extrato.module.css'
test('Deve renderizar o mesmo componente com props atualizadas', () => {
    const transacao = {
        transacao: 'Depósito',
        valor: 100
    }


    const {rerender}  = render(<Transacaoes estilos={estilos} transacao={transacao}/>)
    const tipoTransacao = screen.getByTestId('tipoTransacao')
    const valorTransacao = screen.getByTestId('valorTransacao')
    expect(tipoTransacao).toHaveTextContent('Depósito')
    expect(valorTransacao).toHaveTextContent('R$ 100')

    const novatransacao = {
        transacao: 'Transferência',
        valor: 50
    }
    rerender(<Transacaoes estilos={estilos} transacao={novatransacao}/>)
    const novotipoTransacao = screen.getByTestId('tipoTransacao')
    const novovalorTransacao = screen.getByTestId('valorTransacao')
    expect(novotipoTransacao).toHaveTextContent('Transferência')
    expect(novovalorTransacao).toHaveTextContent('- R$ 50')
})