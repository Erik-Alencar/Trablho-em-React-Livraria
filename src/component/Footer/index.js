import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Livros from '../Livros';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
                <Livros img={require('../../assets/códigolimpo.png')} cost="59,90">
                    código limpo 
                </Livros>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Livros img={require('../../assets/react.png')} cost="45,90">
                    React Aprenda praticando
                </Livros>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Livros img={require('../../assets/javascript.png')} cost="160">
                    javaScript o guia definitivo
                </Livros>
            </View>
        </ScrollView> 
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})