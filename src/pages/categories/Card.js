import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import styles from "./style";

const Card = (props) => {

    const navigation = useNavigation();

    const goToMeals = () => {
        navigation.navigate("Meals", { category: props.strCategory });
    }

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.cardButton} onPress={goToMeals}>
                <Image source={{ uri: props.strCategoryThumb }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{props.strCategory}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card;