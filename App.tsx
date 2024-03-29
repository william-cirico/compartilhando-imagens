import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button } from './components/Button';
import { ImageViewer } from './components/ImageViewer';
import * as ImagePicker from "expo-image-picker";
import { useState } from 'react';
import { CircleButton } from './components/CircleButton';
import { IconButton } from './components/IconButton';
import { EmojiPicker } from './components/EmojiPicker';
import { EmojiList } from './components/EmojiList';
import { EmojiSticker } from './components/EmojiSticker';

// Para importar imagens é necessário utilizar o require
const backgroundImage = require("./assets/background-image.png");

// Componente
export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  async function pickImageAsync() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("Você não selecionou nenhuma imagem");
    }
  }

  function onAddSticker() {
    setIsModalVisible(true);
  }

  function onSaveImageAsync() { }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imagePlaceholder={backgroundImage} selectedImage={selectedImage} />
        { selectedEmoji !== null && <EmojiSticker imageSize={40}  stickerSource={selectedEmoji} /> }
      </View>
      {
        showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon={"refresh"} label="Resetar" onPress={() => setShowAppOptions(false)} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon={"save-alt"} label="Salvar" onPress={onSaveImageAsync} />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync} />
            <Button label="Usar foto" onPress={() => setShowAppOptions(true)} />
          </View>
        )
      }
      <EmojiPicker isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <EmojiList onCloseModal={() => setIsModalVisible(false)} onSelect={setSelectedEmoji} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292E',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center"
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row"
  }
});
