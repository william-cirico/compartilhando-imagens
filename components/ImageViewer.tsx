import { Image, StyleSheet } from "react-native";

type Props = {
    imagePlaceholder: any;
    selectedImage: any;
}

export function ImageViewer({ imagePlaceholder, selectedImage }: Props) {
    const imageSource = selectedImage !== null
        ? { uri: selectedImage }
        : imagePlaceholder;

    return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
});