import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function CourseList() {
  const navigation = useNavigation();
 return (
<View style={styles.container}>
       <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
         <Text style={styles.message} testID="TituloMyteacher2">MyTeacher</Text>
       </Animatable.View>

       <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title} testID="TituloListaCursos">Lista Cursos</Text>
        <View style={styles.box}>
        <View style={styles.card}>
            <Text style={styles.tittleCourse} testID="TituloDispositosMoveis">P. Dispositivos Móveis</Text>
            <Text style={styles.tittleCourse} testID="TituloSI">SI - 2022.1</Text>

            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('TeacherList')}testID="btnSaibaMais">
              <Text style={styles.buttonText} >Saiba mais </Text>
            </TouchableOpacity>
        </View>
        </View>
         <View style={styles.box}>
        <View style={styles.card}>
            <Text style={styles.tittleCourse} testID="TituloTesteDeSoftware" >Teste De Software</Text>
            <Text style={styles.tittleCourse} testID="TituloSI2">SI - 2022.1</Text>
            
            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('TeacherList')} testID="btnSaibaMais">
              <Text style={styles.buttonText} >Saiba mais</Text>
            </TouchableOpacity>
        </View>
        </View>
       </Animatable.View>
   </View>  

  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#21AEE4',
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
      backgroundColor: '#FAF8F8',
      flex: 1,
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
    tittleCourse:{
      fontSize: 25,
      margin: 2,
      textAlign: 'center',
      fontWeight: 'bold'
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
    box: {
      marginTop: 15,
      width: '100%',
      height: '45%',
      padding: 5,
      flex: 1
    },
    card: {
      flex: 1,
      borderRadius: 20,
      backgroundColor: '#21AEE4',
      alignItems: 'center',
      justifyContent: 'center',
      },
      
})