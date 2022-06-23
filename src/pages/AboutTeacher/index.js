import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function About() {
  return (
    
    <View style={styles.Group989}>
        <Image
          style={styles.Group1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/cy5hoftk34h-39%3A7?alt=media&token=a27d6e28-971f-4ef5-9d38-7f78f9affe73",
          }}
        />
    <View style={styles.Iphone1313Pro29}>
        <Text style={styles.Txt542}> Bruno Gomes, o lindo !!</Text>
        <Text style={styles.Txt124}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          dignissim sit volutpat sed augue quis.
        </Text>
        <Text style={styles.Txt124}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          dignissim sit volutpat sed augue quis.
        </Text>
        <Text style={styles.Txt532}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          dignissim sit volutpat sed augue quis.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Iphone1313Pro29: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 121,
    paddingLeft: 100,
    paddingRight: 68,
    borderRadius: 50,
    backgroundColor: "rgba(250,248,248,1)",
    width: 390,
    height: 844,
  },
  Group989: {
    backgroundColor: '#21AEE4',
    display: "flex",
    flexDirection: "column",
  },
  Group1: {
    paddingLeft: 50,
    display: "flex",
    width: 210,
    height: 210,
    marginBottom: 20,
    marginLeft: 100,
  },
  Txt542: {
    fontSize: 20,
    width: 250,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginBottom: 30,
    textTransform: "uppercase"
  },
  Txt124: {
    fontSize: 17,
    fontWeight: "300",
    color: "rgba(0,0,0,1)",
    width: 378,
    marginBottom: 15,
  },
  Txt124: {
    fontSize: 17,
    fontWeight: "300",
    color: "rgba(0,0,0,1)",
    width: 378,
    marginBottom: 15,
  },
  Txt532: {
    fontSize: 17,
    fontWeight: "300",
    color: "rgba(0,0,0,1)",
    width: 378,
  },
})
