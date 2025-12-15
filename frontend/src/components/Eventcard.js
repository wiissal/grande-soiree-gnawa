
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export default function EventCard({ event }) {
  if (!event) return null;

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: event.image }}
        style={styles.image}
      />
      <View style={styles.overlay}>
        <Text style={styles.badge}>{event.badge}</Text>
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.description}>{event.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 10,
    height: 380,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 16,
  },
  badge: {
    backgroundColor: colors.burntBronze,
    color: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: colors.warmSand,
    lineHeight: 18,
  },
});