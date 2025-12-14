import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../constants/colors";

export const EventCard = ({ event }) => {
  if (!event) return null;
  return (
    <View style={StyleSheet.card}>
      <image source={{ uri: event.image }} style={StyleSheet.image} />
      <View style={StyleSheet.content}>
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.date}>{event.eventDate}</Text>
        <Text style={styles.location}>{event.location}</Text>
        <Text style={styles.description}>{event.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(
  {

  }
)