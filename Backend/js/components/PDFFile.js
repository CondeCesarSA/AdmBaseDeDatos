import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer'
import Logo from '../assets/logo.png'

Font.register({
    family: 'Roboto', fonts: [
        { fontStyle: 'italic' },
        { fontStyle: 'italic', fontWeight: 700 },
    ]
});
// Create styles
const styles = StyleSheet.create({
    page: {
        width: "100%",
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: '25px'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    description: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    factura: {
        margin: 10,
        padding: 10,
        flexGrow: .5
    },
    text: {
        fontSize: "10px"
    },
    clienteData: {
        fontSize: "10px",
        flexDirection: 'row',
    },
    clientHeader: {
        fontSize: "14px",
        flexDirection: 'row'
    },
    image: {
        width: "50px"
    }
});

export const PDFFile = () => {
    return (
        <PDFViewer style={{ width: "100%", height: "100vh", borderWidth: 0 }}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", alignItems: "center" }}>
                            <View style={styles.description}>
                                <View style={{ display: "flex", flexDirection: "row" }}>
                                    <View>
                                        <Image style={styles.image} src={Logo} alt=""></Image>
                                    </View>
                                    <View>
                                        <View>
                                            <Text>KERNEL IT SOLUCIONES</Text>
                                        </View>
                                        <View style={styles.text}>
                                            <Text>Gral. Lucio Norberto Mansilla 3643</Text>
                                            <Text>Buenos Aires - C1425BPW CABA</Text>
                                            <Text>Telefono: 11-5423-2249</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.factura}>
                                <Text>FACTURA</Text>
                                <View style={styles.text}>
                                    <Text>N°: 11004</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
                            <View style={styles.description}>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "70%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}>Nombre: Ezequiel</Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}>Date: 12/06/2022</Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "50%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}>Direccion: calle falsa 123</Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}>Ciudad: Buenos Aires</Text>
                                    <Text style={{ width: "20%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}>Cod.Postal: 1060</Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "60%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderRightWidth: 0 }}>Telefono: 11-4344-0921</Text>
                                    <Text style={{ width: "40%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1 }}>Email: exequiel_1@gmail.com</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
                            <View style={styles.description}>
                                <View style={styles.clientHeader}>
                                    <Text style={{ width: "70%", paddingTop: "8px", paddingBottom: "8px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0, display: "flex", textAlign: "center", backgroundColor: 'black', color: 'white' }}>DESCRIPCION</Text>
                                    <Text style={{ width: "30%", paddingTop: "8px", paddingBottom: "8px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, display: "flex", textAlign: "center", backgroundColor: 'black', color: 'white', borderLeftColor: 'white' }}>VALOR</Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "70%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}>Samsung S20+</Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}>$13.000,00</Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "70%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}> </Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}> </Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "70%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}> </Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}> </Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "70%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}> </Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}> </Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "70%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}> </Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}> </Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "70%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}> </Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}> </Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "70%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}> </Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}> </Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "70%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}> </Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}> </Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "70%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}> </Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}> </Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "70%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}> </Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}> </Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "70%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}> </Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}> </Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "70%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}> </Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}> </Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "55%", paddingTop: "5px", paddingLeft: "5px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0, borderBottomWidth: 0 }}>Notas:</Text>
                                    <Text style={{ width: "15%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}>SUB-TOTAL</Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}>$13.000,00</Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "55%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0, borderBottomWidth: 0, borderTopWidth: 0 }}> </Text>
                                    <Text style={{ width: "15%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0 }}>IVA</Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderBottomWidth: 0 }}>21%</Text>
                                </View>
                                <View style={styles.clienteData}>
                                    <Text style={{ width: "55%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderRightWidth: 0, borderTopWidth: 0 }}> </Text>
                                    <Text style={{ width: "15%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1, borderRightWidth: 0 }}>TOTAL</Text>
                                    <Text style={{ width: "30%", paddingTop: "20px", paddingLeft: "3px", borderStyle: "solid", borderColor: "black", borderWidth: 1 }}>$15.730,00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Page >
            </Document >
        </PDFViewer >
    )
}