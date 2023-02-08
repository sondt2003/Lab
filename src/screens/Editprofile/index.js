import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const EditProFile = (props) => {
    const navigation = props.navigation;
    const chuyenMH = (ten_mh, data) => {
        navigation.navigate(ten_mh, data);
    }
    const route = props.route;
    let [isTen, setTen] = useState(route.params?.isTen || "");
    let [isTuoi, setTuoi] = useState(route.params?.isTuoi || "");
    let [isDiaChi, setDiaChi] = useState(route.params?.isDiaChi || "");
    let [isSdt, setSdt] = useState(route.params?.isSdt || "");
    let [isEmail, setEmail] = useState(route.params?.isEmail || "");
    return (
        <View>
            <View style={styles.inline}>
                <TextInput style={styles.styleInput}
                    value={isTen}
                    onChangeText={setTen}
                    placeholder="Tên"
                />
            </View>
            <View style={styles.inline}>
                <TextInput
                    style={styles.styleInput}
                    value={isTuoi}
                    onChangeText={setTuoi}
                    placeholder="Tuổi"
                />
            </View>
            <View style={styles.inline}>
                <TextInput
                    style={styles.styleInput}
                    value={isDiaChi}
                    onChangeText={setDiaChi}
                    placeholder="Địa Chỉ"
                />
            </View>
            <View style={styles.inline}>
                <TextInput
                    style={styles.styleInput}
                    value={isSdt}
                    onChangeText={setSdt}
                    placeholder="Sdt"
                />
            </View>
            <View style={styles.inline}>
                <TextInput
                    style={styles.styleInput}
                    value={isEmail}
                    onChangeText={setEmail}
                    placeholder="Email"
                />
            </View>
                <Button title='Hủy' style={styles.styleInput} onPress={() => chuyenMH("Home")}></Button>
                <Button title='Lưu' style={styles.styleInput} onPress={() => chuyenMH("Profile",{isTen:isTen,isTuoi:isTuoi,isDiaChi:isDiaChi,isSdt:isSdt,isEmail:isEmail})}></Button>
        </View>
    )
}
export default EditProFile;
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
        margin: 10,
        flex: 1
    }
});
