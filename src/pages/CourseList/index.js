import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from'react-native-animatable';

export default function CourseList() {
 return (
<View style={styles.container}>
       <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
         <Text style={styles.message}>Myteacher</Text>
       </Animatable.View>

       <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Lista Cursos</Text>
        <View style={styles.card}>
            <Text>Myteacher</Text>
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
    button:{
      backgroundColor: '#21AEE4',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 4,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText:{
      color:'#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    card: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: 114,
        none: 0,
        marginLeft: 20,
        paddingTop: 10,
        paddingLeft: 40,
        borderRadius: 20,
        backgroundColor: '#21AEE4',
        backdropFilter: "blur(4px)",
        width: 150,
        height: 190,
      },
  


})