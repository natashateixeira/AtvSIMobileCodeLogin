import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  imgsappho: {
    width: 160,
    height: 158,
    marginTop: 25
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop:30,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
  fotodescr: {
    fontSize: 10,
    marginTop: 5,
    marginBottom: 25,
  },
  botao: {
    width: 120,
    height: 45,
    borderWidth: 2,
    borderColor: '#4d4d4d',
    borderRadius: 25,
    marginBottom: 20,
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 45,
  },
});

const InfoPage = ({ fechar }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Informações</Text>
        <Image source={require('../assets/sappho.jpg')} style={styles.imgsappho} />

        <Text style={styles.fotodescr}>
          Sappho, famosa poetisa grega (Foto: Reprodução)
        </Text>

<Text style={styles.description}>
          "Sappho" é o nome de uma famosa poetisa grega da ilha de Lesbos, que viveu por volta do século VII a.C. Ela é conhecida principalmente por sua poesia lírica, especialmente por seus poemas de amor e desejo dirigidos à mulheres. Sappho é uma das mais importantes poetisas da Grécia Antiga e uma das primeiras mulheres cuja poesia sobreviveu até os dias de hoje.
        </Text>
        <Text style={styles.description}>
          O termo "sappho" tem sido associado à homossexualidade feminina e ao amor entre mulheres devido à reputação de Sappho como uma poetisa que escrevia sobre o amor entre mulheres e deriva do próprio nome da poetisa. Ela é frequentemente retratada como um símbolo da cultura lésbica e é uma figura proeminente na história da literatura LGBTQ+. A palavra é frequentemente usada para se referir a mulheres homossexuais ou à cultura lésbica de forma mais ampla.
        </Text>

        <TouchableOpacity style={styles.botao} onPress={fechar}>
          <Text style={styles.btnTexto}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default InfoPage;
