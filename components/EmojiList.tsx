import { FlatList, Image, Pressable, StyleSheet } from "react-native";

type Props = {
    onSelect: (item: any) => void;
    onCloseModal: VoidFunction;
};

export function EmojiList({ onCloseModal, onSelect }: Props) {
    const emojis = [
        require("../assets/emoji1.png"),
        require("../assets/emoji2.png"),
        require("../assets/emoji3.png"),
        require("../assets/emoji4.png"),
        require("../assets/emoji5.png"),
        require("../assets/emoji6.png"),
    ];

    // Sempre que renderizamos uma lista precisamos informar a key 
    return <FlatList 
        horizontal
        data={emojis}
        renderItem={({ item, index }) => (
            <Pressable onPress={() => {
                onSelect(item);
                onCloseModal();
            }}>
                <Image style={styles.image} key={index} source={item} />
            </Pressable>
        )}
        contentContainerStyle={styles.listContainer}
    />
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20
    }
});