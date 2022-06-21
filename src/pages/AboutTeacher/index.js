import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function About() {
  return (
    <View style={styles.Iphone1313Pro29}>
      <View style={styles.Group989}>
        <Image
          style={styles.Group1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/mqiatum2hi8-25%3A22?alt=media&token=21406e41-a317-44d4-a636-8a3026dbdaf4",
          }}
        />
        <Text style={styles.Txt542}> Myteacher</Text>
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
    alignItems: "flex-start",
    paddingTop: 30,
    paddingBottom: 121,
    paddingLeft: 42,
    paddingRight: 68,
    borderRadius: 50,
    backgroundColor: "rgba(250,248,248,1)",
    width: 390,
    height: 844,
  },
  Group989: {
    display: "flex",
    flexDirection: "column",
  },
  Group1: {
    width: 250,
    height: 273,
    marginBottom: 22,
  },
  Txt542: {
    fontSize: 18,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginBottom: 15,
  },
  Txt124: {
    fontSize: 17,
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
    width: 278,
    marginBottom: 15,
  },
  Txt124: {
    fontSize: 17,
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
    width: 278,
    marginBottom: 15,
  },
  Txt532: {
    fontSize: 17,
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
    width: 278,
  },
})
