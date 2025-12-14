import AsyncStorage from "@react-native-async-storage/async-storage";

//save data to offline storage
export const saveToStorage = async (Key, data) => {
  try {
    await AsyncStorage.setItem(Key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to storage:", error);
  }
};
//get data from offline storage
export const getFromStorage = async (key, data) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error getting from storage:", error);
    return null;
  }
};
//delete data from offline storage
export const removeFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("error removing from storage:", error);
  }
};
//clear all offline storage
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Error clearing the storage:", error);
  }
};
