import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';

import Livros from '../../component/Livros';

export default function Home() {
 const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
       <Image style = {{ width: 500, height: 200 }} source={{uri: 'https://auditoriacidada.org.br/wp-content/uploads/2018/03/livros-1280x575.jpg'}}/>

         <View style={styles.textContainer}>
            <Text style={styles.text}>LIVROS</Text>
            <Text style={[styles.text,  ]}>DE</Text>
            <Text style={[styles.text,  ]}>PROGAMAÇÃO</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
         </View>
       </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LIVROS EM PROMOÇÃO</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Livros img={require('../../assets/arquiteturalimpa.png')} cost="R$50,00" onClick={()=> navigation.navigate('Detail') }>
            Arquitetura limpa
          </Livros>
          <Livros img={require('../../assets/códigolimpo.png')} cost="R$59,90" onClick={()=> navigation.navigate('Detail') }>
            código limpo
          </Livros>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Livros img={require('../../assets/javascript.png')} cost="R$160,00" onClick={()=> alert('CLICOU')}>
            javaScript o guia definitivo
          </Livros>
          <Livros img={require('../../assets/padrõesjavascript.png')} cost="R$40,00" onClick={()=> alert('CLICOU')}>
          Padrões JavaScript
          </Livros>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Livros img={require('../../assets/react.png')} cost="R$45,90" onClick={()=> alert('CLICOU')}>
           React Aprenda praticando
          </Livros>
          <Livros img={require('../../assets/ocodificadorlimpo.png')} cost="R$45,90" onClick={()=> alert('CLICOU')}>
           O codificador limpo
          </Livros>
        </View>

      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 10
  },
  

  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});