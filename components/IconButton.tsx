import { StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
    icon: any;
    label: string;
    onPress: any;
}

export function IconButton({ icon, label, onPress }: Props) {
    return <TouchableOpacity onPress={onPress} style={styles.iconButton}>
        <MaterialIcons name={icon} size={24} color="#fff" />
        <Text style={styles.iconButtonLabel}>{label}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({ 
    iconButton: {
        justifyContent: "center",
        alignItems: "center"
    },
    iconButtonLabel: {
        color: "#fff",
        marginTop: 12
    }
});