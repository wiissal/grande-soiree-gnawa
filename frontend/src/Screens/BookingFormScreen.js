import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { bookingService } from '../services/bookingService';

export default function BookingFormScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [numTickets, setNumTickets] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const ticketPrice = 90;
  const serviceFee = 20;
  const totalPrice = numTickets * ticketPrice + serviceFee;

  const handleIncrement = () => {
    setNumTickets(numTickets + 1);
  };

  const handleDecrement = () => {
    if (numTickets > 1) {
      setNumTickets(numTickets - 1);
    }
  };

  const handleConfirmBooking = async () => {
  if (!fullName.trim() || !email.trim()) {
    Alert.alert('Error', 'Please fill in all fields');
    return;
  }

  setIsLoading(true);
  try {
    const bookingData = {
      user_name: fullName,
      user_email: email,
      quantity: numTickets,
      artist_id: 1,
      event_info_id: 1,
    };

    const booking = await bookingService.createBooking(bookingData);
    
    Alert.alert('Success', `Booking confirmed!\nCode: ${booking.confirmation_code}`);
    
    setFullName('');
    setEmail('');
    setNumTickets(1);
    
    setTimeout(() => {
      navigation.navigate('Bookings');
    }, 1000);
  } catch (error) {
    Alert.alert('Error', 'Failed to create booking');
    console.error('Booking error:', error);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={colors.deepTeal} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Your Tickets</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Banner Image */}
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizz3I9b98jh2Z0KXJyHGo6_oxFqgXTphpJw&s",
          }}
          style={styles.bannerImage}
        />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerText}>Gnaoua World Music Festival</Text>
        </View>
      </View>

      {/* Form Content */}
      <View style={styles.content}>
        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="e.g. Malika Ayadi"
            placeholderTextColor={colors.mistGrey}
            value={fullName}
            onChangeText={setFullName}
          />
          <Ionicons name="person" size={20} color={colors.mistGrey} />
        </View>

        {/* Email Address */}
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="name@example.com"
            placeholderTextColor={colors.mistGrey}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Ionicons name="mail" size={20} color={colors.mistGrey} />
        </View>

        {/* Number of Tickets */}
        <Text style={styles.label}>Number of Tickets</Text>
        <View style={styles.ticketCounterContainer}>
          <View style={styles.counterWrapper}>
            <TouchableOpacity
              onPress={handleDecrement}
              style={styles.counterButton}
            >
              <Text style={styles.counterButtonText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.ticketCount}>{numTickets}</Text>
            <TouchableOpacity
              onPress={handleIncrement}
              style={[styles.counterButton, styles.counterButtonActive]}
            >
              <Text style={styles.counterButtonTextActive}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.ticketSubtext}>General Admission - 90 MAD</Text>
        </View>

        {/* Price Breakdown */}
        <View style={styles.priceBreakdown}>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Ticket Price (x{numTickets})</Text>
            <Text style={styles.priceValue}>{numTickets * ticketPrice} MAD</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Service Fee</Text>
            <Text style={styles.priceValue}>{serviceFee} MAD</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalPrice}>{totalPrice} MAD</Text>
          </View>
        </View>

        {/* Confirm Booking Button */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirmBooking}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <>
              <Text style={styles.confirmButtonText}>Confirm Booking</Text>
              <Ionicons name="arrow-forward" size={20} color={colors.white} />
            </>
          )}
        </TouchableOpacity>

        {/* Terms & Conditions */}
        <Text style={styles.termsText}>
          By booking, you agree to our{' '}
          <Text style={styles.termsLink}>Terms & Conditions.</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.deepTeal,
    paddingTop: 15,
  },
  bannerContainer: {
    position: 'relative',
    height: 180,
    backgroundColor: '#2a2a2a',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 12,
  },
  bannerText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.deepTeal,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.deepTeal,
    paddingRight: 10,
  },
  ticketCounterContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  counterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    justifyContent: 'center',
  },
  counterButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterButtonActive: {
    backgroundColor: colors.burntBronze,
  },
  counterButtonText: {
    fontSize: 20,
    color: colors.deepTeal,
    fontWeight: 'bold',
  },
  counterButtonTextActive: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
  },
  ticketCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.deepTeal,
    marginHorizontal: 16,
  },
  ticketSubtext: {
    fontSize: 12,
    color: colors.mistGrey,
  },
  priceBreakdown: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  priceLabel: {
    fontSize: 13,
    color: colors.mistGrey,
  },
  priceValue: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.deepTeal,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 12,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.deepTeal,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.burntBronze,
  },
  confirmButton: {
    backgroundColor: colors.burntBronze,
    paddingVertical: 14,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: colors.mistGrey,
    textAlign: 'center',
  },
  termsLink: {
    color: colors.burntBronze,
    fontWeight: '600',
  },
});