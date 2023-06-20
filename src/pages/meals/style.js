import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        backgroundColor: "orange",
    },
    cardContainer: {
        margin: 10,
    },
    cardButton: {
    },
    cardImage: {
        flex: 1,
        height: 200,
        flexDirection: "row",
    },
    cardTitle: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.75)',
        padding: 10,
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "flex-end",
    },
})

export default styles;