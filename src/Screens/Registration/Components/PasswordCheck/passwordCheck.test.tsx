import { render, screen } from "@testing-library/react"
import PasswordCheck from "./passwordCheck"

describe('Password Check', () => {

    it('Renders correctly', () => {
        render(<PasswordCheck />)
        expect(screen.getByTestId('passwordCheck')).toBeInTheDocument()
    })
})