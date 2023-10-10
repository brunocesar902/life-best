import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#D3D3D3",
        alignItems: "center",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: 10,
    },
    form: {
        width: "100%",
        height: "auto",
        marginLeft: 5,
    },
    fromLabel: {
        color: "#000000",
        fontSize: 20,
        paddingLeft: 25,
        fontWeight: "bold",
        marginTop: 20,

    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#DCDCDC",
        height: 40,
        marginTop: 5,
        marginLeft: 15,
        paddingLeft: 15,
    },
    textButtonCalculador: {
        fontSize: 20,
        color: "#000000",
        fontWeight: "bold"
    },
    buttonCalculador: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#C0C0C0",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 18,
        margin: 30,
    }
})

export default styles