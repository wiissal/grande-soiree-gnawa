import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { colors } from "../constants/colors";
import EventCard from "../components/EventCard";
import ArtistCard from "../components/ArtistCard";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const event = {
    name: "Experience the Spiritual Rhythms",
    description: "Join us for a night of Gnawa music and culture in Agadir",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "LIVE FESTIVAL",
  };

  const featuredArtists = [
    {
      id: 1,
      name: "MEHDI NASSOULI",
      origin: "Main Stage",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "OUM",
      origin: "South Stage",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Event Card */}
      <View style={styles.eventSection}>
        <EventCard event={event} />
      </View>

      {/* Event Info */}
      <View style={styles.infoRow}>
        <View style={styles.infoBox}>
          <Ionicons name="calendar" size={20} color="#C17A4C" />
          <Text style={styles.infoDate}>Jun 24-26</Text>
          <Text style={styles.infoLabel}>2025</Text>
        </View>
        <View style={styles.infoBox}>
          <Ionicons name="location" size={20} color="#C17A4C" />
          <Text style={styles.infoDate}>Location</Text>
          <Text style={styles.infoLabel}>Essaouira</Text>
        </View>
        <View style={styles.infoBox}>
          <Ionicons name="pricetag" size={20} color="#C17A4C" />
          <Text style={styles.infoDate}>Price</Text>
          <Text style={styles.infoLabel}>199 MAD</Text>
        </View>
      </View>

     { /*Book Tickets Button*/}
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => navigation.navigate("BookingForm")}
      >
        <Text style={styles.bookButtonText}>Book Tickets</Text>
      </TouchableOpacity>

      {/* Featured Artists Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Maelems</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ArtistsTab")}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Artists Grid */}
      <View style={styles.artistsGrid}>
        {featuredArtists.map((artist) => (
          <View key={artist.id} style={styles.artistCardWrapper}>
            <ArtistCard
              artist={artist}
              onPress={() =>
                navigation.navigate("ArtistDetail", { id: artist.id })
              }
            />
          </View>
        ))}
      </View>

      {/* Browse All Artists Button */}
      <TouchableOpacity
        style={styles.browseButton}
        onPress={() => navigation.navigate("Artists")}
      >
        <Text style={styles.browseButtonText}>Browse All Artists →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuIcon: {
    fontSize: 24,
    color: colors.deepTeal,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.deepTeal,
  },
  bellIcon: {
    fontSize: 20,
  },
  eventSection: {
    paddingHorizontal: 15,
    paddingTop: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  infoBox: {
    alignItems: "center",
    flex: 1,
    alignItems: "center",
    gap: 5, // space between icon and text
  },
  infoDate: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.deepTeal,
    marginBottom: 4,
  },
  infoLabel: {
    fontSize: 12,
    color: colors.mistGrey,
  },
  bookButton: {
    backgroundColor: colors.burntBronze,
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 28,
  },
  bookButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.deepTeal,
  },
  seeAll: {
    fontSize: 14,
    color: colors.burntBronze,
    fontWeight: "bold",
  },
  artistsGrid: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  artistCardWrapper: {
    flex: 1,
    marginHorizontal: 2,
  },
  browseButton: {
    backgroundColor: colors.burntBronze,
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 40,
  },
  browseButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
});
