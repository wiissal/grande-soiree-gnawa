import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

export default function ArtistListScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const mockArtists = [
    {
      id: 1,
      name: "Oum",
      description: "Breaking barriers on one of the finest female voices...",
      price: "MAD 149",
      image:
        "https://cdn-images.dzcdn.net/images/artist/7399d5192ac0599112e305e15adc91ac/1900x1900-000000-81-0-0.jpg",
    },
    {
      id: 2,
      name: "Mehdi Nassouli",
      description: "A young virtuoso dedicated to preserving Agadir's...",
      price: "MAD 150",
      image:
        "https://fesfestival.com/2016/inc/uploads/2016/01/Mehdi-Nassouli.jpg",
    },
    {
      id: 3,
      name: "Omar Hayat",
      description: "Master musician bringing traditional Gnawa rhythms...",
      price: "MAD 181",
      image:
        "https://www.festival-gnaoua.net/wp-content/uploads/2025/05/Maalem-Omar-hayat-1024x760.jpg",
    },
    {
      id: 4,
      name: "Maalem Marchane",
      description: "The folk rock hero of Africa blending tradition...",
      price: "MAD 149",
      image:
        "https://www.festival-gnaoua.net/wp-content/uploads/2025/05/Maalem-Abdelkebir-Merchane.jpg",
    },
    {
      id: 5,
      name: "Hamid Elkasri",
      description: "Master of the guenbri known for soulful tones...",
      price: "MAD 181",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzS2jXP8ENRvutqUrS3WtNihJVhSUJIAEG_A&s",
    },
    {
      id: 6,
      name: "Mahmoud Gania",
      description: "The pioneers of Gnawa fusion, bringing tradition...",
      price: "MAD 196",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4spo7wwVK_Vwc2rrTQEhiMdAZs_PgCxWVA&s",
    },
    {
      id: 7,
      name: "Hindi Zahra",
      description: "Blending traditional Gnawa with contemporary sounds...",
      price: "MAD 165",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJW659y5OvkIzxsRx7o9C46-tnZGm4wQ8kA&s",
    },
    {
      id: 8,
      name: "Mehdi Qamoum",
      description: "A versatile artist mastering multiple instruments...",
      price: "MAD 155",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwm_uN1KVSfy7FjkVk7haLWjPVarCymsh-Bg&s",
    },
  ];
  const filteredArtists = mockArtists.filter(
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
        <Image source={{ uri: item.image }} style={styles.artistImage} />
        <View style={styles.priceBox}>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </View>
      <Text style={styles.artistName}>{item.name}</Text>
      <Text style={styles.artistDescription} numberOfLines={2}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );
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
});
