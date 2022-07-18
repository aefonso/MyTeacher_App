import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from "react-native"

import * as Animatable from'react-native-animatable';

import { useNavigation } from "@react-navigation/native"

export default function TeacherList() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
         <Text style={styles.message} testID="TituloTeacherList">MyTeacher</Text>
       </Animatable.View>
       
       <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title} testID="ListProfessores">Lista Professores</Text>
        <View style={styles.box}>
        <View style={styles.card}>
        <Image
                style={styles.ImgAvatar}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/cy5hoftk34h-39%3A7?alt=media&token=a27d6e28-971f-4ef5-9d38-7f78f9affe73",
                }}
                testID="ImageTeacher"
              />
              <Text style={styles.titleTeacher}>Bruno Gomes</Text>
            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('AboutTeacher')} testID="btnSaibaMaisTeacher">
              <Text style={styles.buttonText}>Saiba mais</Text>
            </TouchableOpacity>
        </View>
        </View>
       </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#21AEE4'
    },
    containerHeader:{
      marginTop: '14%',
      marginBottom: '8%',
      paddingStart: '5%',
    },
    message:{
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
    },
    containerForm:{
      flex: 1,
      backgroundColor: '#FAF8F8',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
    },
    title:{
      fontSize: 20,
      marginTop: 28,
      textAlign: 'center',
    },
    titleTeacher: {
      fontSize: 17,
      marginTop: 10,
      textAlign: 'center',
    },
    box: {
      marginTop: 15,
      width: '50%',
      height: '45%',
      padding: 5,
    },
    card: {
      flex: 1,
      borderRadius: 20,
      backgroundColor: '#21AEE4',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
    ImgAvatar: {
      width: 52,
      height: 52,
      marginBottom: 10,
      alignItems: 'center'
    },
    button:{
      backgroundColor: '#fff',
      width: '80%',
      borderRadius: 4,
      paddingVertical: 4,
      marginTop: 60,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: '#21AEE4',
      fontSize: 15,
      fontWeight: 'bold'
    },

})
