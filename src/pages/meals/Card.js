import { TouchableOpacity, Text, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";

const Card = (props) => {

    const navigation = useNavigation();

    function goToDetails() {
        navigation.navigate("Details", { id: props.idMeal, imageURI: props.strMealThumb });
    }

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={goToDetails} style={styles.cardButton}>
                <ImageBackground source={{ uri: props.strMealThumb }} style={styles.cardImage}>
                    <Text style={styles.cardTitle}>{props.strMeal}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View >
    )
}

export default Card;