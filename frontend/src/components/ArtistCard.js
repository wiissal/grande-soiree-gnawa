import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

export default function ArtistCard({ artist, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: artist.image }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{artist.name}</Text>
        <Text style={styles.origin}>{artist.origin}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.deepTeal,
    marginBottom: 4,
  },
  origin: {
    fontSize: 12,
    color: colors.mistGrey,
  },
});