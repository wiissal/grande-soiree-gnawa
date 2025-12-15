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
      "https://a3communication.net/wp-content/uploads/2023/06/Festival-Gnoua4.jpg",
    badge: "LIVE FESTIVAL",
  };

  const featuredArtists = [
    {
      id: 1,
      name: "MEHDI NASSOULI",
      origin: "Main Stage",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcprqHxguH2N8FrBlLmCqxc8pdF-lnWxquIw&s",
    },
    {
      id: 2,
      name: "OUM",
      origin: "South Stage",
      image:
        "https://cdn-images.dzcdn.net/images/artist/7399d5192ac0599112e305e15adc91ac/1900x1900-000000-81-0-0.jpg",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Festival Header */}
      <View style={styles.festivalHeader}>
        <Text style={styles.festivalTitle}>Festival Gnaoua</Text>
      </View>
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
          <Text style={styles.infoLabel}>AGADIR</Text>
        </View>
        <View style={styles.infoBox}>
          <Ionicons name="pricetag" size={20} color="#C17A4C" />
          <Text style={styles.infoDate}>Price</Text>
          <Text style={styles.infoLabel}>199 MAD</Text>
        </View>
      </View>

      {/*Book Tickets Button*/}
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => navigation.navigate("BookingForm")}
      >
        <Text style={styles.bookButtonText}>Book Tickets</Text>
      </TouchableOpacity>

      {/* Featured Artists Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Maelems</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("ArtistsTab")}
        ></TouchableOpacity>
      </View>

      {/* Artists Grid */}
      <View style={styles.artistsGrid}>
        {featuredArtists.map((artist) => (
          <View key={artist.id} style={styles.artistCardWrapper}>
            <ArtistCard
              artist={artist}
              onPress={() =>
                navigation.navigate("Artists", {
                  screen: "ArtistDetail",
                  params: { id: artist.id },
                })
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
        <Text style={styles.browseButtonText}>Browse All Artists </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  festivalHeader: {
    backgroundColor: colors.burntBronze,
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginBottom: 15,
  },
  festivalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
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
    borderRadius: 20,
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
    gap: 10,
  },
  artistCardWrapper: {
    flex: 1,
  },

  browseButton: {
    backgroundColor: colors.burntBronze,
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 40,
  },
  browseButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
});
