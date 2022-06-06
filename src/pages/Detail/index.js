import React from 'react';
import { View, Text, Image, ScrollView,  StyleSheet} from 'react-native';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';



export default function Detail({ navigation }) {

  navigation.setOptions({
     headerTitle: 'Arquitetura Limpa'
  })
  
             
 return (
   <ScrollView style={styles.container}>
         
         <Image style = {{ width: 300, height: 400 }} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/815d9tE7jSL.jpg'}}/>

       <View>
         <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 30 } ]}>Arquitetura limpa</Text>
         </View>

        

         <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SizeButton>kildlle R$40</SizeButton >
            <SizeButton>capa comum R$50</SizeButton>
            
          </ScrollView>
         </View>

         <View style={styles.textContent}>
          <Text style={styles.textTitle}>
           -Informações do Produto
          </Text>
          <Text style={styles.textContent}>
          
          Livro - Arquitetura limpa:
          As regras universais de arquitetura de software aumentam dramaticamente a produtividade dos desenvolvedores ao longo da vida dos sistemas de software. Agora, aproveitando o sucesso dos seus best-sellers "Código Limpo" e "O Codificador Limpo", o lendário artesão de software Robert C. Martin (“Uncle Bob”) vai revelar essas regras e ajudar o leitor a aplicá-las.A "Arquitetura Limpa" de Martin não é só mais um catálogo de opções. Com base em meio século de experiência nos mais variados ambientes de software, Martin indica as escolhas que você deve fazer e explica por que elas são cruciais para o seu sucesso. Como já era esperado do Uncle Bob, este livro está cheio de soluções simples e diretas para os desafios reais que você enfrentará - aqueles que irão influenciar diretamente o sucesso ou fracasso dos seus projetos. Aprenda sobre as metas dos arquitetos de software - e as principais disciplinas e práticas que podem concretizá-las;Domine os princípios essenciais do design de software para abordar função, separação de componentes e gestão de dados;Veja como os paradigmas de programação impõem disciplina ao restringirem as ações dos desenvolvedores;Saiba identificar o que é crucialmente importante e o que é apenas um “detalhe”;Implemente estruturas ótimas e de alto nível para web, banco de dados, thick-client, console e aplicativos incorporados;Defina limites e camadas adequadas e organize os componentes e serviços;Saiba por que designs e arquiteturas dão errado e como prevenir (ou corrigir) essas falhas
            
          </Text>
          
          <Text style={styles.textList}>
            - Categoria: INFORMATICA
          </Text>
          
          <Text style={styles.textList}>
            - LINGUA: PORTUGUES
          </Text>
         </View>


        <Button/>

        <View style={styles.line} />

        <Footer/>

       </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%',
    
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '9%'
  
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 30,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});