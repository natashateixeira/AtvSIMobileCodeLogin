import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFB6C1',
    width: '100%',
    height: 350,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    paddingTop: 12,
    paddingBottom: 12,
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 22,
    textAlign: 'center'
  },
  imglogo:{
    width: 160,
    height: 70,
    marginBottom: 10
  },
  input:{
    height:45,
    borderWidth:1,
    borderRadius:6,
    borderColor:'#000000',
    marginHorizontal:20,
    marginVertical:8,
    fontSize:18,
    padding:10,
  },
  botao: {
    width: 120,
    height: 45,
    borderWidth: 2,
    borderColor: '#4d4d4d',
    borderRadius: 25,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  }
});

export default class Entrar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      senha: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/sappho-cds.png')} style={styles.imglogo}/>
        <Text style={styles.titulo}>Fazer login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          onChangeText={(texto) => this.setState({usuario: texto})}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(texto) => this.setState({senha: texto})}
        />
        <TouchableOpacity style={styles.botao} onPress={this.props.fechar}>
          <Text style={styles.btnTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
