import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Renders Kampagnenmanager's list", () => {
    const { getByText } = render(<App />);

    expect(getByText(/Kampagnenmanager/i)).toBeInTheDocument();
});
