import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

import * as Animatable from'react-native-animatable';

export default function About() {
  return (
    
    <View style={styles.Group989}>
      <Animatable.View animation="fadeInLeft" delay={400}>
        <Image
          style={styles.Group1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96s5423d69u-34%3A32?alt=media&token=fd1cee2c-257e-4bb9-b4fc-7b2f164cc213",
          }}
          testID="imageAluno"
        />
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.header}>
        <Text style={styles.Txt542} testID="TituloAlunos"> Alunos, lindos!!</Text>
        
        <Text style={styles.Txt124} testID="descriptionApp">
        O MyTeacher é uma aplicativo onde busca facilitar a vida dos alunos do IFRN, onde seu principal objetivo é ter uma descrição das áreas de conhecimentos e os professores que fazem parte de cada uma.
Assim um aluno pode buscar pelo professor que tem atuação na area de conhecimento a qual o aluno busca se desenvolver.
        </Text>
        
        <Text style={styles.Txt125} testID="nomeAlunos1">
          Afonso Henrique 
        </Text>
        <Text style={styles.Txt125} testID="nomeAlunos2">
         Carla Monik
        </Text>
        <Text style={styles.Txt125} testID="nomeAlunos3">
          Rafael Ribeiro
        </Text>
      
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
 header: {
    backgroundColor: '#FAF8F8',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  Group989: {
    backgroundColor: '#21AEE4',
    flex: 1
  },
  Group1: {
    paddingLeft: 50,
    display: "flex",
    width: 210,
    height: 210,
    marginBottom: 20,
    marginLeft: '22%',
    alignItems: 'center'
  },
  Txt542: {
    fontSize: 20,
    marginTop: 20,
    textTransform: "uppercase",
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8
  },
  Txt124: {
    fontSize: 17,
    marginBottom: 15,
    textAlign: 'justify'
  },
  
  Txt125: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'justify',
    fontWeight: 'bold',
    marginTop: 5,
    textTransform: 'uppercase'
  },

})
