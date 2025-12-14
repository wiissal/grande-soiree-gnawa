import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>La Grande Soirée Gnawa</Text>
      <Text style={styles.date}>12 Dec 2025 - Agadir</Text>
      
      <Text style={styles.sectionTitle}>Featured Artists</Text>
      <TouchableOpacity style={styles.artistCard}>
        <Text style={styles.artistName}>Maalem Hamid El Kasri</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => navigation.navigate('BookingForm')}
      >
        <Text style={styles.bookButtonText}>Book Tickets</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.deepTeal,
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: colors.burntBronze,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.deepTeal,
    marginVertical: 12,
  },
  artistCard: {
    backgroundColor: colors.warmSand,
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  artistName: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: colors.burntBronze,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  bookButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});