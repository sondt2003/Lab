import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';


const Profile = (props) => {
    const navigation = props.navigation;
    const chuyenMH = (ten_mh, data) => {
        navigation.navigate(ten_mh, data);
    }
    const route = props.route;
    let [isTen, setTen] = useState(route.params?.isTen || "Đặng Trường Sơn");
    let [isTuoi, setTuoi] = useState(route.params?.isTuoi || "20");
    let [isDiaChi, setDiaChi] = useState(route.params?.isDiaChi || "Thái Nguyên");
    let [isSdt, setSdt] = useState(route.params?.isSdt || "0368722770");
    let [isEmail, setEmail] = useState(route.params?.isEmail || "sondtph22824@fpt.edu.vn");
    let [isCheck, setCheck] = useState(false);

    const getData = () => {
        setTen(route.params?.isTen|| "");
        setTuoi(route.params?.isTuoi|| "");
        setDiaChi(route.params?.isDiaChi|| "");
        setSdt(route.params?.isSdt|| "");
        setEmail(route.params?.isEmail|| "");
    }
    return (
        <View>
            <View style={styles.inline}>
                <Text style={styles.styleInput}>{isTen}</Text>
                <Button title='Sửa' onPress={() => chuyenMH("EditProFile", { isTen: isTen, isTuoi: isTuoi, isDiaChi: isDiaChi, isSdt: isSdt, isEmail: isEmail })}></Button>
            </View>
            <View style={styles.inline}>
                <Text style={styles.styleInput}>{isTuoi}</Text>
            </View>
            <View style={styles.inline}>
                <Text style={styles.styleInput}>{isDiaChi}</Text>
            </View>
            <View style={styles.inline}>
                <Text style={styles.styleInput}>{isSdt}</Text>
            </View>
            <View style={styles.inline}>
                <Text style={styles.styleInput}>{isEmail}</Text>
            </View>
            <Button title='Bấm' onPress={() => getData()} />
        </View>
    );
};

export default Profile;
const styles = StyleSheet.create({
    inline: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        margin: 10,
    },
    styleInput: {
        width: 100,
        borderRadius: 10,
        backgroundColor: '#F0DC82',
        padding: 5,
        paddingLeft: 20,
        marginRight: 10,
        flex: 1
    }
});