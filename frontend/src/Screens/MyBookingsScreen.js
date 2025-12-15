import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';

export default function MyBookingsScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
 // Mock bookings - replace with real data later
  const mockBookings = [
    {
      id: 1,
      code: 'GNA-4823-X',
      artist: 'Maelem Hamid El Kasri',
      date: 'Sat, 24 June',
      time: '20:00',
      tickets: '2 Tickets',
      status: 'CONFIRMED',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=150&h=150&fit=crop',
    },
    {
      id: 2,
      code: 'GNA-4122-B',
      artist: 'OUM',
      date: 'Sun, 25 June',
      time: '21:30',
      tickets: '1 Ticket',
      status: 'PENDING',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=150&h=150&fit=crop',
    },
  ];
  const filteredBookings = mockBookings.filter(
    (booking) =>
      booking.code.toLowerCase().includes(searchText.toLowerCase()) ||
      booking.artist.toLowerCase().includes(searchText.toLowerCase())
  );
  const getStatusStyle = (status) => {
    return status === 'CONFIRMED'
      ? styles.statusConfirmed
      : styles.statusPending;
  };
const getStatusTextStyle = (status) => {
    return status === 'CONFIRMED'
      ? styles.statusConfirmedText
      : styles.statusPendingText;
  };
   const renderBookingCard = (booking) => (
    <View key={booking.id} style={styles.bookingCard}>
      <View style={styles.cardContent}>
        <View style={styles.cardLeft}>
          <View style={styles.codeRow}>
            <Text style={styles.bookingCode}>{booking.code}</Text>
            <Ionicons name="copy" size={16} color={colors.mistGrey} />
          </View>

          <Text style={styles.artistName}>{booking.artist}</Text>

          <View style={styles.detailsRow}>
            <Ionicons name="calendar" size={14} color={colors.mistGrey} />
            <Text style={styles.detailText}>{booking.date} • {booking.time}</Text>
          </View>

          <View style={styles.detailsRow}>
            <Ionicons name="ticket" size={14} color={colors.mistGrey} />
            <Text style={styles.detailText}>{booking.tickets}</Text>
          </View>

          <View style={[getStatusStyle(booking.status)]}>
            <Text style={[getStatusTextStyle(booking.status)]}>
              {booking.status}
            </Text>
          </View>
        </View>

        <Image source={{ uri: booking.image }} style={styles.artistImage} />
      </View>
    </View>
  );
const hasBookings = filteredBookings.length > 0;
return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
     {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Bookings</Text>
      </View> 
       {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={colors.mistGrey} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by email or code"
          placeholderTextColor={colors.mistGrey}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
       {hasBookings ? (
        <View style={styles.bookingsContent}>
          {filteredBookings.map((booking) => renderBookingCard(booking))}
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="ticket-outline" size={60} color={colors.mistGrey} />
          <Text style={styles.emptyTitle}>No bookings yet</Text>
          <Text style={styles.emptySubtitle}>
            Explore the lineup and book your tickets to experience the magic of Gnawa
          </Text>
          <TouchableOpacity
            style={styles.discoverButton}
            onPress={() => navigation.navigate('Artists')}
          >
            <Text style={styles.discoverButtonText}>Discover Artists</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.burntBronze,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: colors.deepTeal,
  },
  bookingsContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  bookingCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  cardContent: {
    flexDirection: 'row',
    padding: 16,
  },
  cardLeft: {
    flex: 1,
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  bookingCode: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.deepTeal,
  },
  artistName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.burntBronze,
    marginBottom: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  detailText: {
    fontSize: 12,
    color: colors.mistGrey,
  },
  statusConfirmed: {
    backgroundColor: colors.burntBronze,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  statusConfirmedText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.white,
  },
  statusPending: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  statusPendingText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.white,
  },
  artistImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: 12,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.deepTeal,
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 13,
    color: colors.mistGrey,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
  },
  discoverButton: {
    backgroundColor: colors.mistGrey,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
  },
  discoverButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
