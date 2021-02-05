import ClickComponent from "./ClickComponent";
import { render, screen, fireEvent } from '@testing-library/react'

test('calls onClick prop when clicked', () => {
    // const handleClick = jest.fn()
    render(<ClickComponent />)
    fireEvent.click(screen.getByTestId("clickID"))
    // expect(handleClick).toHaveBeenCalledTimes(1)
    expect(screen.getByText("bye")).toBeInTheDocument()
})