import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import axios from "axios";

import styles from "./style"

const Details = ({ route }) => {

    const { id, imageURI } = route.params;

    const [mealDetails, setMealDetails] = useState([]);

    useEffect(() => {
        axios
            .get(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(function (response) {
                setMealDetails(response.data.meals[0])
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    function handlePress() {
        Linking.openURL(mealDetails.strYoutube)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{ uri: imageURI }} style={styles.image} />
                <Text style={styles.title}>{mealDetails.strMeal}</Text>
                <Text style={styles.area}>{mealDetails.strArea}</Text>
                <Text style={styles.instractions}>{mealDetails.strInstructions}</Text>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>
                        Watch on Youtube
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

};

export default Details;
