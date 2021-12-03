import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { ButtonPrimary } from "./Buttons";

describe('The input must be able to receive, by props, a Name, a Label, a Placeholder and an onChange.', () => {

    const component = render(<ButtonPrimary>Soy un boton</ButtonPrimary>)

    test('should display a correct children', () => {
        component.getByRole('button', {name: /Soy un boton/i})
    })
})