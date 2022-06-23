import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/104940843?v=4';
const urlToGithib = 'https://github.com/newjully';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificandolink');
    const res = await Linking.canOpenURL(urlToGithib);
    if (res) {
      console.log('link aprovado');
      console.log('Abrindo Link.....');
      await Linking.openURL(urlToGithib);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Juliana no jardim fundo parte tronco parte muro branco"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome: julian Cruz"
          style={[style.defaultText, style.name]}>
          Juliana Cruz
        </Text>
        <Text
          accessibilityLabel="Nickname: juliana cruz"
          style={[style.defaultText, style.nickname]}>
          newjully
        </Text>
        <Text
          accessibilityLabel="Descrição: Estudante de Sistema de Informação"
          style={[style.defaultText, style.description]}>
          Estudante Sistema de Informação
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, //Expande a cor para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection:'row',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 25,
  },
  nickname: {
    color: colorDarkFontGithub,
    fontSize: 18,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
