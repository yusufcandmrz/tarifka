import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        margin: 10,
        backgroundColor: "lightgray",
    },
    image: {
        height: 200,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginHorizontal: 10,
        color: "#7F1734",
    },
    area: {
        color: "#7F1734",
        marginBottom: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
    },
    instractions: {
        marginHorizontal: 10,
        fontWeight: "bold",
    },
    button: {
        margin: 20,
        padding: 10,
        backgroundColor: "red",
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        alignSelf: "center",
    },
})

export default styles;