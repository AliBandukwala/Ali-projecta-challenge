import { render, screen } from "@testing-library/react"
import CustomInput from "./customInput"

describe('Custom Input', () => {

    it('Renders correctly', () => {
      render(<CustomInput type="email"/>)
      expect(screen.getByPlaceholderText('email')).toBeInTheDocument()
      render(<CustomInput type="password"/>)
      expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
    })
  
    it('Should have PasswordCheck component for password type', () => {
        render(<CustomInput type="password"/>)
        expect(screen.getByTestId('passwordCheck')).toBeInTheDocument()
    })

    it('Should have SubmitButton component for password type', () => {
        render(<CustomInput type="password"/>)
        expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument()
    })
  })