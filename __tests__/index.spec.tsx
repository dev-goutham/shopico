import React from "react"
import { screen, render } from "@testing-library/react"

import Index from "../pages/index"

describe("<Index/>", () => {
	it("Renders", () => {
		render(<Index />)
		expect(screen.getByText(/hello world/i)).toBeInTheDocument()
	})
})
