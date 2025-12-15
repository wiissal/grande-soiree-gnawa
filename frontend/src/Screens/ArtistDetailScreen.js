import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

export default function ArtistDetailScreen({ navigation, route }) {
  const { id } = route.params;
  // Mock data - replace with real data later
  const artist = {
    id: id,
    name: "OUM",
    image:
      "https://cdn-images.dzcdn.net/images/artist/7399d5192ac0599112e305e15adc91ac/1900x1900-000000-81-0-0.jpg",
    description:
      "Oum is a Moroccan singer and songwriter known for blending Gnawa, African, soul, and jazz influences.Her music is deeply rooted in Moroccan heritage while embracing a modern, global sound.With a powerful and soothing voice, she explores themes of love, spirituality, and inner healing.Oum’s songs create an intimate connection between tradition and contemporary expression",
    performances: [
      {
        time: "21:00",
        day: "FRIDAY, JUNE 28",
        stage: "Scene Melodia Hassan",
      },
      {
        time: "23:30",
        day: "SATURDAY, JUNE 29",
        stage: "Scene de la Plage",
      },
    ],
  };
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
        {/* Artist Name */}
        <Text style={styles.artistName}>{artist.name}</Text>
        {/* Description */}
        <Text style={styles.description}>{artist.description}</Text>
        {/* Performances */}
        <View style={styles.performancesSection}>
          {artist.performances.map((performance, index) => (
            <View key={index} style={styles.performanceBox}>
              <Text style={styles.performanceTime}>{performance.time}</Text>
              <Text style={styles.performanceDay}>{performance.day}</Text>
              <Text style={styles.performanceStage}>{performance.stage}</Text>
            </View>
          ))}
        </View>
        {/* Get Ticket Button */}
        <TouchableOpacity
          style={styles.getTicketButton}
          onPress={() => navigation.navigate("Home", { screen: "BookingForm" })}
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#2a2a2a",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
  },
  imageContainer: {
    width: "100%",
    height: 400,
    backgroundColor: "#2a2a2a",
  },
  artistImage: {
    width: "100%",
    height: "100%",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  artistName: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.burntBronze,
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    fontSize: 13,
    color: colors.deepTeal,
    lineHeight: 20,
    marginBottom: 20,
    textAlign: "justify",
    fontFamily: 'Georgia',
  },
  performancesSection: {
    marginBottom: 24,
  },
  performanceBox: {
    backgroundColor: "#f9f9f9",
    borderLeftWidth: 4,
    borderLeftColor: colors.burntBronze,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    borderRadius: 4,
  },
  performanceTime: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.deepTeal,
    marginBottom: 4,
  },
  performanceDay: {
    fontSize: 12,
    color: colors.mistGrey,
    fontWeight: "600",
    marginBottom: 4,
  },
  performanceStage: {
    fontSize: 12,
    color: colors.mistGrey,
  },
  getTicketButton: {
    backgroundColor: colors.burntBronze,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  getTicketButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
