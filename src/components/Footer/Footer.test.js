import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { IntlProvider } from "react-intl";
import Footer from "./Footer.js";
import { messages as allMessages } from "../../messages/messages";

describe('Should display the minimum data of an Footer', () => {
    const currentLocale = "es";
    const messages = allMessages[currentLocale];
    let component = render(
        <IntlProvider locale={currentLocale} messages={messages}>
            <Footer />
        </IntlProvider>
    )
    test('should render an address', () => {
        component.getAllByRole('listitem').filter(listitem => listitem.textContent === /Dirección/i)
    })
    test('should render a phone', () => {
        component.getAllByRole('listitem').filter(listitem => listitem.textContent === /Teléfono/i)
    })
    test('should render a contact', () => {
        component.getAllByRole('listitem').filter(listitem => listitem.textContent === /Contacto/i)
    })
})