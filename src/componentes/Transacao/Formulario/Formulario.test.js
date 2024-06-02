import { render, screen } from "@testing-library/react";
import Formulario from "./index";
import userEvent from "@testing-library/user-event";

describe('Deve renderizar um campo de input', () => {
    test('no documento', () => {
        render(<Formulario />)
        const campoValor = screen.getByPlaceholderText('Digite um valor')
        expect(campoValor).toBeInTheDocument()
    })
    
    test('com o type number', () => {
        render(<Formulario />)
        const campoValor = screen.getByPlaceholderText('Digite um valor')
        expect(campoValor).toHaveAttribute('type', 'number')
    })
    
    test('que pode ser preenchido', () => {
        render(<Formulario />)
        const campoValor = screen.getByPlaceholderText('Digite um valor')
        userEvent.type(campoValor, '50')
        expect(campoValor).toHaveValue(50)
    })
})

test('Deve chamar um evento de on submit ao clicar em realizar transação', () => {
    const realizarTransacao = jest.fn()
    render(<Formulario realizarTransacao={realizarTransacao}/>)
    const botao = screen.getByRole('button')

    userEvent.click(botao)
    expect(realizarTransacao).toHaveBeenCalledTimes(1)

})


