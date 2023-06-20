import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    container:{
        backgroundColor: "orange",
    },
    cardContainer: {
        backgroundColor: "white",
        margin: 10,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },
    cardButton: {
        flexDirection: "row",
    },
    cardImage: {
        resizeMode: "contain",
        width:100,
        height: 100,
        marginLeft: 20,
    },
    cardTitle: {
        marginLeft: 10,
        alignSelf: "center",
        justifyContent: "center",
        fontWeight: "bold",
    },
});