import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import axios from "axios";

import Card from "./Card";
import styles from "./style";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://www.themealdb.com/api/json/v1/1/categories.php")
            .then(
                function (response) {
                    setCategories(response.data.categories);
                })
            .catch(
                function (error) {
                    console.log(error)
                })
    }, [])

    const renderItem = ({ item }) => {
        return (
            <Card
                strCategory={item.strCategory}
                strCategoryThumb={item.strCategoryThumb}
            />
        )
    }

    return (

        <View style={styles.container}>
            <FlatList data={categories} renderItem={renderItem} />
        </View>
    )
}

export default Categories;