import { render, screen } from "@testing-library/react"
import SubmitButton from "./submitButton"

const fetchSubmitButton = () => {
  render(<SubmitButton />)
  const submitButton = screen.getByRole('button', {name: /submit/i})
  return submitButton
}

describe('Custom Input', () => {
    it('Renders correctly', () => {
      const submitButton = fetchSubmitButton()
      expect(submitButton).toBeInTheDocument()
    })

    it('Has correct display text', () => {
      const submitButton = fetchSubmitButton()
      expect(submitButton).toHaveTextContent('Submit')
    })

    it('Is disabled on initial render', () => {
      const submitButton = fetchSubmitButton()
      expect(submitButton).toBeDisabled()
    })
})