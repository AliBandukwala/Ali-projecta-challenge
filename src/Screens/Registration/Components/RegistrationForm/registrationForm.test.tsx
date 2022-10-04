import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Registration from "./registrationForm"

describe('Registration Form', () => {

    it('Enables the submit button only when criteria meet', () => {
        render(<Registration />)
        const emailInput = screen.getByPlaceholderText('email') as HTMLInputElement
        const pwdInput = screen.getByPlaceholderText('password') as HTMLInputElement
        const submitButton = screen.getByRole('button', {name: /submit/i})
        expect(submitButton).toBeDisabled()
        userEvent.type(emailInput, 'abcd@gmail.com')
        userEvent.type(pwdInput, 'Abcdef1@')
        expect(submitButton).not.toBeDisabled()
    })
  
    it('Resets the State when submit button is clicked', () => {
        render(<Registration />)
        const emailInput = screen.getByPlaceholderText('email') as HTMLInputElement
        const pwdInput = screen.getByPlaceholderText('password') as HTMLInputElement
        const submitButton = screen.getByRole('button', {name: /submit/i})
        userEvent.type(emailInput, 'abcd@gmail.com')
        userEvent.type(pwdInput, 'Abcdef1@')
        userEvent.click(submitButton)
        expect(emailInput.value).toBe('')
        expect(pwdInput.value).toBe('')
    })
})