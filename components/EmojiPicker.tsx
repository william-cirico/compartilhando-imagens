import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
    isVisible: boolean;
    children: JSX.Element;
    onClose: VoidFunction;
};

export function EmojiPicker({ children, isVisible, onClose }: Props) {
    return <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Escolha um emoji</Text>
                <TouchableOpacity onPress={onClose}>
                    <MaterialIcons name="close" color={"#fff"} size={22} />
                </TouchableOpacity>
            </View>
            { children }
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    modalContent: {
        height: "25%",
        width: "100%",
        backgroundColor: "#25292E",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom: 0
    },
    titleContainer: {
        height: "16%",
        backgroundColor: "#464C55",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        color: "#fff",
        fontSize: 16
    },
    pickerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 50,
        paddingVertical: 20
    }
});