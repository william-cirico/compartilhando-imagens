import { Image, View } from "react-native";

type Props = {
    stickerSource: any;
    imageSize: number;
};

export function EmojiSticker({ imageSize, stickerSource }: Props) {
    return <View style={{ top: -350 }}>
        <Image 
            source={stickerSource} 
            resizeMode="contain" 
            style={{
                width: imageSize,
                height: imageSize
            }}
        />
    </View>
}