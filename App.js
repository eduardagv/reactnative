import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState(0);

  function somar(){
    setResultado(parseFloat(valor1) + parseFloat(valor2));
  }
  function subtrair(){
    setResultado(parseFloat(valor1) - parseFloat(valor2));
  }
  function multiplicar(){
    setResultado(parseFloat(valor1) * parseFloat(valor2));
  }
  function dividir(){
    setResultado(parseFloat(valor1) / parseFloat(valor2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Calculadora</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn.icon-icons.com/icons2/72/PNG/256/calculator_14445.png',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Digite o 1 número</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Digite o 2 número</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>

      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={somar}
        >
            <Text style={styles.textoBotao}>Somar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={subtrair}
        >
            <Text style={styles.textoBotao}>Subtrair</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={multiplicar}
        >
            <Text style={styles.textoBotao}> Multiplicar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={dividir}
        >
            <Text style={styles.textoBotao}>Dividir</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>= {resultado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '	#836FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBloco:{
    fontSize:22,
  },
  texto:{
    color:'#836FFF',
    fontSize:30
  },
  input:{
    borderColor:'#836FFF',
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#778899',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  }, 
  logo:{
    width:50,
    height:50
  }
});