import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { IntlProvider } from "react-intl";
import Footer from "./Footer.js";
import { messages as allMessages } from "../../messages/messages";

describe('Should display the minimum data of an Footer', () => {
    const currentLocale = "es";
    const messages = allMessages[currentLocale];
    let component;
    beforeEach(() => {
        component = render(
            <IntlProvider locale={currentLocale} messages={messages}>
                <Footer />
            </IntlProvider>
        )
    })
    
    test('should render an address', () => {
        component.getByText(/Dirección/i)
    })
    // test('should render a phone', () => {
    //     component.getByText(/Teléfono/i)
    // })
    test('should render a contact', () => {
        component.getByText(/Contacto/i)
    })
})