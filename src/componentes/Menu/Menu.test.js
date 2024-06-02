import { render, screen } from "@testing-library/react";
import Menu from "./index";

test('Deve rendereziar um link para a página inicial', () => {
    render(<Menu />)

    const linkPaginaInicial = screen.getByText('Inicial')
    expect(linkPaginaInicial).toBeInTheDocument()
})

test('Deve rendereziar uma lista de links', () => {
    render(<Menu />)

    const ListaDeLinks = screen.getAllByRole('link')
    expect(ListaDeLinks).toHaveLength(4)
})


//Query para verificar se tem na lista
test('Não deve  rendereziar o link para Extrato', () => {
    render(<Menu />)
    const LinkExtrato = screen.queryByText('Extrato')
    expect(LinkExtrato).not.toBeInTheDocument()
})

test('Deve renderizar uma lista de links com a classe link', () => {
    render(<Menu />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => expect(link).toHaveClass('link'))
    expect(links).toMatchSnapshot()
})

