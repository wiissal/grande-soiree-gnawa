import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
   ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import { useQuery } from '@tanstack/react-query';
import { artistService } from '../services/artistService';

export default function ArtistListScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");

  const { data: artists = [], isLoading, error } = useQuery({
    queryKey: ['artists'],
    queryFn: () => artistService.getArtists(),
  });

  const filteredArtists = artists.filter(
    (artist) =>
      artist.name.toLowerCase().includes(searchText.toLowerCase()) ||
      artist.description.toLowerCase().includes(searchText.toLowerCase())
  );
  const renderArtistCard = ({ item }) => (
    <TouchableOpacity
      style={styles.artistCard}
      onPress={() => navigation.navigate("ArtistDetail", { id: item.id })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.artistImage} 
         onError={() => console.log('Image failed to load:', item.image)}/>
      </View>
      <Text style={styles.artistName}>{item.name}</Text>
      <Text style={styles.artistDescription} numberOfLines={2}>
        {item.description}
      </Text>
      <TouchableOpacity
      style={styles.getTicketButton}
        onPress={() => navigation.navigate('Home', { screen: 'BookingForm' })}
    >
      <Text style={styles.getTicketText}>Get Ticket</Text>
    </TouchableOpacity>
    </TouchableOpacity>
  );
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
        <Text style={styles.errorText}>Error loading artists</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={colors.deepTeal} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Artists Performing</Text>
        <View style={{ width: 24 }} />
      </View>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={colors.mistGrey} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search artists or instruments..."
          placeholderTextColor={colors.mistGrey}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      {/* Artists Grid */}
      <FlatList
        data={filteredArtists}
        renderItem={renderArtistCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
    paddingVertical: 16,
    paddingTop: 20,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.deepTeal,
    flex: 1,
    textAlign: "center",
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
    color: colors.deepTeal,
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  gridRow: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  artistCard: {
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 12,
    overflow: "hidden",
  },
  artistImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  artistName: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.deepTeal,
    marginTop: 10,
    marginHorizontal: 8,
  },
  artistDescription: {
    fontSize: 12,
    color: colors.mistGrey,
    marginHorizontal: 8,
    marginTop: 4,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
  },
  artistImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  priceBox: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: colors.burntBronze,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
  },
  priceText: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.white,
  },
  artistName: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.deepTeal,
    marginTop: 10,
    marginHorizontal: 8,
  },
  artistDescription: {
    fontSize: 12,
    color: colors.mistGrey,
    marginHorizontal: 8,
    marginTop: 4,
    marginBottom: 10,
  },
  getTicketButton: {
  backgroundColor: colors.burntBronze,
  marginHorizontal: 8,
  marginTop: 10,
  marginBottom: 10,
  paddingVertical: 10,
  borderRadius: 6,
  alignItems: 'center',
},
getTicketText: {
  color: colors.white,
  fontSize: 13,
  fontWeight: 'bold',
},
center: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
errorText: {
  fontSize: 16,
  color: colors.deepTeal,
},
});
