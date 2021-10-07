import { render, screen } from "@testing-library/react";
import App from '../App'

test('Github API should respond', () => {
    fetch(` https://api.github.com/users/oussematn`)
        .then(data => data.json())
        .then(data => {
            expect(data.login).toBe('oussematn')
        })
})

test('should render App component', () => {
    render(<App />)
    const app = screen.getByTestId('app')
    expect(app).toBeInTheDocument
})

