import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { IntlProvider } from "react-intl";
import NavBar from "./NavBar";
import { messages as allMessages } from "../../messages/messages";

describe('The navbar must contain the links to the views.', () => {
    const currentLocale = "es";
    const messages = allMessages[currentLocale];
    let component = render(
        <IntlProvider locale={currentLocale} messages={messages}>
            <NavBar />
        </IntlProvider>
    )
    test('should render link to Home', () => {
        component.getAllByRole('listitem').filter(listitem => listitem.textContent === /Inicio/i)
    })
    test('should render link to Guest', () => {
        component.getAllByRole('listitem').filter(listitem => listitem.textContent === /Invitado/i)
    })
    test('should render link to Register', () => {
        component.getAllByRole('listitem').filter(listitem => listitem.textContent === /Registro/i)
    })
})