import React from 'react'
import { Document, Page, View, Text, Image } from '@react-pdf/renderer'
import Logo from "../../assets/Logo-negro.png";
import qr from '../../assets/qr.png'

const TicketPdf = ({ nombre, apellido }) => {
    const t_container = {
        display: "flex",
        justifyContent: "center",
        height: "100%",
        width: "100%"
    }
    const ticket = {
        background: "#EEEEEE",
        marginBottom: "2rem",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100%",
        width: "100%",
        padding: "20px",
        paddingTop: 0,

    }
    const text_default = { textAlign: "center", marginBottom: "10px", marginTop: "10px" }
    return (
        <Document>
            <Page size="A6">
                <View style={t_container}>
                    <View style={ticket}>
                        <Image style={{ width: "100%", objectFit: "cover" }} src={Logo} alt="Logo" />
                        <Text style={{ textAlign: "center", fontSize: 26, fontWeight: "bold" }}>{nombre} {apellido}</Text>
                        <Text style={{ ...text_default, fontSize: 12, fontWeight: "100", color: "#3b3737" }}>Felicidades por haber reservado tu lugar para este evento. Te esperamos el dia sabado 18/12 en Dr. Travi 697
                            Belén de Escobar</Text>
                        <Image style={{ width: "50%", objectFit: "cover" }} src={qr} alt="QrLogo" />
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default TicketPdf