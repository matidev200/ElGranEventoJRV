import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import Register from "./Register"
import { IntlProvider } from "react-intl";
import { messages as allMessages } from "../../messages/messages";

describe('The input must be able to receive, by props, a Name, a Label, a Placeholder and an onChange.', () => {
    const currentLocale = "es";
    const messages = allMessages[currentLocale];
    let component;
    beforeEach(() => {
        component = render(
            <IntlProvider locale={currentLocale} messages={messages}>
                <Register />
            </IntlProvider>
        )
    })
    test('should render input Name', () => {
        component.getByLabelText(/Nombre/i)
    })
    test('should render input last name', () => {
        component.getByLabelText(/Apellido/i)
    })
    test('should render input Phone', () => {
        component.getByLabelText(/Telefono/i)
    })
    test('should render input Mail', () => {
        component.getByLabelText(/Mail/i)
    })
    test('should render input Church', () => {
        component.getByLabelText(/Iglesia/i)
    })
})