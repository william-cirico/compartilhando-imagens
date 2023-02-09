import { StyleSheet, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function CircleButton({ onPress }: { onPress: any }) {
    return <View style={styles.circleButtonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.circleButton}>
            <MaterialIcons name="add" size={38} color="#25292E" />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        borderRadius: 42,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: "#FFD33D",
        padding: 3
    },
    circleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        borderRadius: 42,
        backgroundColor: "#fff"
    }
});