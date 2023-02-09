import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
    label: string;
    theme?: "primary";
    onPress: any;
}

export function Button({ label, theme, onPress }: Props) {
    if (theme === "primary") {
        return <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#FFD33D", borderRadius: 18 }]}>
            <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: "#fff" }]}>
                <FontAwesome
                    name="picture-o"
                    size={18}
                    style={styles.buttonIcon}
                    color="#25292E"
                />
                <Text style={[styles.buttonLabel, { color: "#25292E" }]}>{label}</Text>
            </TouchableOpacity>
        </View>
    }

    return <View style={styles.buttonContainer} >
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    </View >
}

const styles = StyleSheet.create({
    buttonIcon: {
        paddingRight: 8
    },
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16
    }
});

