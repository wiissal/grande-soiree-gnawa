import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { bookingService } from '../services/bookingService';

export default function MyBookingsScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [email, setEmail] = useState('');
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!email.trim()) {
      alert('Please enter your email');
      return;
    }

    setIsLoading(true);
    try {
      const data = await bookingService.getBookingByEmail(email);
      setBookings(Array.isArray(data) ? data : [data]);
      setHasSearched(true);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setBookings([]);
      setHasSearched(true);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.confirmation_code.toLowerCase().includes(searchText.toLowerCase()) ||
      booking.user_name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderBookingCard = (booking) => (
    <View key={booking.id} style={styles.bookingCard}>
      <View style={styles.cardContent}>
        <View style={styles.cardLeft}>
          <View style={styles.codeRow}>
            <Text style={styles.bookingCode}>{booking.confirmation_code}</Text>
            <Ionicons name="copy" size={16} color={colors.mistGrey} />
          </View>

          <Text style={styles.artistName}>{booking.user_name}</Text>

          <View style={styles.detailsRow}>
            <Ionicons name="mail" size={14} color={colors.mistGrey} />
            <Text style={styles.detailText}>{booking.user_email}</Text>
          </View>

          <View style={styles.detailsRow}>
            <Ionicons name="ticket" size={14} color={colors.mistGrey} />
            <Text style={styles.detailText}>{booking.quantity} Ticket(s)</Text>
          </View>

          <View style={[styles.statusBox, getStatusStyle(booking.booking_status)]}>
            <Text style={[styles.statusText, getStatusTextStyle(booking.booking_status)]}>
              {booking.booking_status.toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={styles.priceSection}>
          <Text style={styles.priceLabel}>Total</Text>
          <Text style={styles.price}>{booking.total_price} MAD</Text>
        </View>
      </View>
    </View>
  );

  const getStatusStyle = (status) => {
    return status === 'confirmed'
      ? styles.statusConfirmed
      : styles.statusPending;
  };

  const getStatusTextStyle = (status) => {
    return status === 'confirmed'
      ? styles.statusConfirmedText
      : styles.statusPendingText;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Bookings</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchSection}>
        <View style={styles.emailInputContainer}>
          <Ionicons name="mail" size={20} color={colors.mistGrey} />
          <TextInput
            style={styles.emailInput}
            placeholder="Enter your email"
            placeholderTextColor={colors.mistGrey}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TouchableOpacity onPress={handleSearch} disabled={isLoading}>
            <Ionicons name="search" size={20} color={colors.burntBronze} />
          </TouchableOpacity>
        </View>

        {/* Search by code */}
        {hasSearched && (
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color={colors.mistGrey} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search by code or name..."
              placeholderTextColor={colors.mistGrey}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        )}
      </View>

      {/* Loading */}
      {isLoading && (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={colors.burntBronze} />
        </View>
      )}

      {/* Bookings List */}
      {hasSearched && !isLoading && filteredBookings.length > 0 && (
        <View style={styles.bookingsContent}>
          {filteredBookings.map((booking) => renderBookingCard(booking))}
        </View>
      )}

      {/* Empty State */}
      {hasSearched && !isLoading && filteredBookings.length === 0 && (
        <View style={styles.emptyState}>
          <Ionicons name="ticket-outline" size={60} color={colors.mistGrey} />
          <Text style={styles.emptyTitle}>No bookings found</Text>
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

      {/* Initial State */}
      {!hasSearched && (
        <View style={styles.emptyState}>
          <Ionicons name="ticket-outline" size={60} color={colors.mistGrey} />
          <Text style={styles.emptyTitle}>Find Your Bookings</Text>
          <Text style={styles.emptySubtitle}>
            Enter your email above to view all your bookings
          </Text>
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
  },
  searchSection: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  emailInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    gap: 8,
  },
  emailInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: colors.deepTeal,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    justifyContent: 'space-between',
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
  statusBox: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  statusConfirmed: {
    backgroundColor: colors.burntBronze,
  },
  statusConfirmedText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.white,
  },
  statusPending: {
    backgroundColor: '#FFA500',
  },
  statusPendingText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.white,
  },
  priceSection: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  priceLabel: {
    fontSize: 11,
    color: colors.mistGrey,
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.burntBronze,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
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