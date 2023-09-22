import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function FilmItem({ film }) {
  const [show, setShow] = useState(false);

  const toggleDetail = () => {
    setShow(!show);
  };

  return (
    <View style={styles.filmContainer}>
      <View>
        <Image style={styles.cover} source={{ uri: "https://image.tmdb.org/t/p/w500" + film.poster_path }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.filmTitle}>Titre : {film.title}</Text>
        <Text style={styles.filmScore}>Score : {film.vote_average}/10</Text>
        <Pressable style={styles.detailsButton} onPress={toggleDetail}>
          <Text>Details</Text>
        </Pressable>
        {show && (
          <View>
            <Text style={styles.filmTitle}>Titre original : {film.original_title}</Text>
            <Text style={styles.filmTitle}>Langue originale : {film.original_language}</Text>
            <Text style={styles.filmTitle}>Date de sortie : {film.release_date}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cover: {
    height: 300,
    width: 200,
    resizeMode: "contain"
  },
  filmContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  infoContainer: {
    flex:1,
    alignItems: "center",
  },
  filmScore: {
    color: "#4d4dff",
    fontWeight: "bold",
  },
  filmTitle: {
    color: "#0000ff",
    fontWeight: "bold",
    textAlign: "center"
  },
  detailsButton: {
    backgroundColor: "red",
    width: 80,
    height:30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
});
