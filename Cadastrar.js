import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFB6C1',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    paddingTop: 12,
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 22,
    textAlign: 'center'
  },
  input:{
    width:200,
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

export default class Cadastrar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      usuario: '',
      senha: '',
      confirmarSenha: ''
    };
  }

  render() {
    return (
          <View style={styles.container}>
            <Text style={styles.titulo}>Sign In</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(texto) => this.setState({email: texto})}
              required={true}
            />
            <TextInput
              style={styles.input}
              placeholder="Nome de usuário"
              onChangeText={(texto) => this.setState({usuario: texto})}
              required={true}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={(texto) => this.setState({senha: texto})}
              required={true}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirme a senha"
              secureTextEntry={true}
              onChangeText={(texto) => this.setState({confirmarSenha: texto})}
              required={true}
            />
            <TouchableOpacity style={styles.botao} onPress={this.props.entrar}>
              <Text style={styles.btnTexto}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.props.fechar}>
              <Text style={styles.btnTexto}>Voltar</Text>
            </TouchableOpacity>
      </View>
    );
  }
}
