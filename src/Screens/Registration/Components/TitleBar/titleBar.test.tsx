import { render, screen } from "@testing-library/react"
import TitleBar from "./titleBar"

describe('TitleBar', () => {
    it('renders correctly', () => {
        render(<TitleBar />)
        expect(screen.getByRole('banner')).toBeInTheDocument()
    })
  
    it('should have the correct title', () => {
        render(<TitleBar />)
        expect(screen.getByRole('banner')).toHaveTextContent('Registration')
    })
  })