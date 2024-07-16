import Logger from '../Logger';
// import { AsyncStorage } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

const TOKEN_KEY = '@Token';

export var tokenMemory = '';

// =======================================================

const cacheTokenStorage = async strToken => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, strToken);
  } catch (error) {
    Logger.err('cacheTokenStorage', {error});
    throw error;
  }
};

const cacheTokenMemory = strToken => {
  tokenMemory = strToken;
};

export const cacheTokenAsync = async strToken => {
  try {
    await cacheTokenStorage(strToken);
    cacheTokenMemory(strToken);
  } catch (error) {
    throw error;
  }
};

// =======================================================

const getTokenStorage = async () => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    Logger.err('getTokenStorage', {error});
    throw error;
  }
};

const getTokenMemory = () => {
  return tokenMemory;
};

export const getTokenAsync = async () => {
  let token = getTokenMemory();

  if (token) return token;
  else {
    try {
      return await getTokenStorage();
    } catch (error) {
      throw error;
    }
  }
};

// =======================================================

const clearTokenStorage = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    Logger.err('clearTokenStorage', {error});
    throw error;
  }
};

const clearTokenMemory = () => {
  tokenMemory = '';
};

export const clearTokenAsync = async () => {
  try {
    await clearTokenStorage();
    clearTokenMemory();
  } catch (error) {
    throw error;
  }
};
