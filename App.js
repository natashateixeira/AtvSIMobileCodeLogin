import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import Entrar from './src/Entrar';
import Cadastrar from './src/Cadastrar';
import Info from './src/Info';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imglogo:{
    width: 160,
    height: 100,
    marginBottom: 15
  },
  botao: {
    width: 120,
    height: 45,
    borderWidth: 2,
    borderColor: '#4d4d4d',
    borderRadius: 25,
    marginBottom: 20
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 45
  },
    botaoInfo: {
    position:'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#4d4d4d',
    borderRadius: 25,
    marginBottom: 5,
    marginRight: 5
  },
  btnInfoTexto: {
    fontSize: 10,
    fontStyle: 'italic',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 30
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible1: false,
      modalVisible2: false,
      modalVisibleInfo: false
    };
    this.entrar1 = this.entrar1.bind(this);
    this.entrar2 = this.entrar2.bind(this);
    this.entrarInfo = this.entrarInfo.bind(this);
    this.sair1 = this.sair1.bind(this);
    this.sair2 = this.sair2.bind(this);
    this.sairInfo = this.sairInfo.bind(this);
  }

  entrar1() {
    this.setState({ modalVisible1: true });
  }

  sair1(visible) {
    this.setState({ modalVisible1: visible });
  }

  entrar2() {
    this.setState({ modalVisible2: true });
  }

  sair2(visible) {
    this.setState({ modalVisible2: visible });
  }

  entrarInfo() {
    this.setState({ modalVisibleInfo: true });
  }

  sairInfo() {
    this.setState({ modalVisibleInfo: false });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#222' }}>
        <View style={{ height: 10, backgroundColor: '#ec7324' }}></View>
        <View style={{ height: 15, backgroundColor: '#fa9951' }}></View>
        <View style={{ flex: 1, backgroundColor: '#FFB6C1' }}>
          <View style={styles.container}>

            <Image source={require('./assets/sappho-cds.png')} style={styles.imglogo}/>

            <TouchableOpacity style={styles.botao} onPress={this.entrar1}>
              <Text style={styles.btnTexto}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.entrar2}>
              <Text style={styles.btnTexto}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoInfo} onPress={this.entrarInfo}>
              <Text style={styles.btnInfoTexto}>Info</Text>
            </TouchableOpacity>
          </View>
          <Modal transparent={true} animationType="fade" visible={this.state.modalVisible1}>
            <View style={styles.modalContainer}>
              <Entrar fechar={() => this.sair1(false)} />
            </View>
          </Modal>
          <Modal transparent={true} animationType="fade" visible={this.state.modalVisible2}>
            <View style={styles.modalContainer}>
              <Cadastrar fechar={() => this.sair2(false)} />
            </View>
          </Modal>
          <Modal transparent={true} animationType="fade" visible={this.state.modalVisibleInfo}>
            <View style={styles.modalContainer}>
              <Info fechar={() => this.sairInfo(false)} />
            </View>
          </Modal>
        </View>
        <View style={{ height: 15, backgroundColor: '#d162a4' }}></View>
        <View style={{ height: 10, backgroundColor: '#b55393' }}></View>
      </View>
    )
  }
}

export default App;

