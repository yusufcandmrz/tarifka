import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import axios from "axios";

import Card from "./Card";
import styles from "./style";

const Meals = ({ route }) => {

    const [meals, setMeals] = useState([])
    const { category } = route.params;

    useEffect(() => {
        axios
            .get(`http://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(function (response) {
                setMeals(response.data.meals)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const renderItem = ({ item }) => {
        return (
            <Card
                strMeal={item.strMeal}
                strMealThumb={item.strMealThumb}
                idMeal={item.idMeal}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={meals} renderItem={renderItem} />
        </View>
    )
};

export default Meals;
