import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { artistService } from '../services/artistService';

export default function ArtistDetailScreen({ navigation, route }) {
  const { id } = route.params;
  const [artist, setArtist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArtist();
  }, [id]);

  const fetchArtist = async () => {
    try {
      const data = await artistService.getArtistsById(id);
      setArtist(data);
      setIsLoading(false);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to load artist');
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.burntBronze} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!artist) return null;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Artist Image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: artist.image }} style={styles.artistImage} />
      </View>

      {/* Artist Info */}
      <View style={styles.content}>
        <Text style={styles.artistName}>{artist.name}</Text>
        <Text style={styles.description}>{artist.description}</Text>

        {/* Performance Time */}
        <View style={styles.performanceBox}>
          <Text style={styles.performanceTime}>{artist.performance_time}</Text>
        </View>

        {/* Get Ticket Button */}
        <TouchableOpacity
          style={styles.getTicketButton}
          onPress={() => navigation.navigate('Home', { screen: 'BookingForm' })}
        >
          <Text style={styles.getTicketButtonText}>Get Ticket</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#2a2a2a',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  imageContainer: {
    width: '100%',
    height: 400,
    backgroundColor: '#2a2a2a',
  },
  artistImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  artistName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.burntBronze,
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 13,
    color: colors.deepTeal,
    lineHeight: 20,
    marginBottom: 20,
    textAlign: 'justify',
  },
  performanceBox: {
    backgroundColor: '#f9f9f9',
    borderLeftWidth: 4,
    borderLeftColor: colors.burntBronze,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 24,
    borderRadius: 4,
  },
  performanceTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.deepTeal,
  },
  getTicketButton: {
    backgroundColor: colors.burntBronze,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  getTicketButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 16,
    color: colors.deepTeal,
  },
})