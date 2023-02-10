import { useEffect, useState } from 'react';
import { View, Pressable, Text, StyleSheet, Alert, Button } from 'react-native';

const Home = (props) => {
    const navigation = props.navigation;
    const chuyenMH = (ten_mh, data) => {
        navigation.navigate(ten_mh, data);
    }
    const route = props.route;
    let [isTen, setTen] = useState();
    let [isTuoi, setTuoi] = useState();
    let [isDiaChi, setDiaChi] = useState();
    let [isSdt, setSdt] = useState();
    let [isEmail, setEmail] = useState();

    const getData = () => {
        setTen(route.params?.isTen || "");
        setTuoi(route.params?.isTuoi || "");
        setDiaChi(route.params?.isDiaChi || "");
        setSdt(route.params?.isSdt || "");
        setEmail(route.params?.isEmail || "");
    }
    useEffect(() => getData(), [route.params?.isTen || "",route.params?.isTuoi || "",route.params?.isDiaChi || "",route.params?.isSdt || "",route.params?.isEmail || ""]);

    return (
        <View style={styles.inline}>
            <Pressable style={styles.styleInput} onPress={() => chuyenMH('Profile',{isTen:isTen,isTuoi:isTuoi,isDiaChi:isDiaChi,isSdt:isSdt,isEmail:isEmail})}>
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