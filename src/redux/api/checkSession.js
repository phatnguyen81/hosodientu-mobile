import AsyncStorage from '@react-native-community/async-storage';

export const checkSession = async () => {
  const expAt = (await AsyncStorage.getItem('expAt')) * 1;
  return Date.now() >= expAt;
};
