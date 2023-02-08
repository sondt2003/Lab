import { useState } from 'react';
import { View, Pressable, Text, StyleSheet, Alert, Button } from 'react-native';

const Home = (props) => {
    const navigation = props.navigation;
    const chuyenMH = (ten_mh, data) => {
        navigation.navigate(ten_mh, data);
    }
    return (
        <View style={styles.inline}>
            <Pressable style={styles.styleInput} onPress={() => chuyenMH('Profile')}>
                <Text>Vào trang Thông Profile</Text>
            </Pressable>
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    inline: {
        alignSelf: 'center',
        alignItems: 'center',
        margin: 10,
        marginTop: 40,
    },
    styleInput: {
        width: 200,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'red',
        padding: 5,
        marginRight: 10,
        alignContent: "center",
        alignSelf: "center"
    }
});