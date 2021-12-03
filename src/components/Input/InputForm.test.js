import React, { useState } from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import { IntlProvider } from "react-intl";
import InputForm from "./InputForm";
import { messages as allMessages } from "../../messages/messages";




describe('The input must be able to receive, by props, a Name, a Label, a Placeholder and an onChange.', () => {
    
    
    const currentLocale = "es";
    const messages = allMessages[currentLocale];
    let component;
    beforeEach(() => {
        component = render(
            <IntlProvider locale={currentLocale} messages={messages}>
                <InputForm
                    placeholder="Nombre generico"
                    label="Nombre"
                    name="name"
                    type="type"
                />
            </IntlProvider>
        )
    })

    test('should display a Placeholder', () => {
        component.getByPlaceholderText(/Nombre generico/i)
    })
    test('should render a Label', () => {
        component.getByText(/Nombre/i)
    })
    test('should render a name', () => {
        const input = component.getByText(/Nombre/i)
        fireEvent.change(input, { target: { name: 'Facu' } })
        expect(input.value).toBe('Facu')
    })
})