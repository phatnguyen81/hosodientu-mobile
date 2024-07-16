import Logger from '../Logger';
// import { AsyncStorage } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

const USER_INFO_KEY = '@UserInfo';

export var userMemory = '';

// =======================================================

const cacheUserStorage = async strJson => {
  if (typeof strJson != 'string')
    throw new Error('Vui lòng truyền vào kiểu string');

  try {
    await AsyncStorage.setItem(USER_INFO_KEY, strJson);
    cacheUserMemory(strJson);
  } catch (error) {
    Logger.err('cacheUserStorage', {error});
    throw error;
  }
};

const cacheUserMemory = strJson => {
  if (typeof strJson != 'string')
    throw new Error('Vui lòng truyền vào kiểu string');

  userMemory = strJson;
};

export const cacheUserAsync = async strJson => {
  try {
    await cacheUserStorage(strJson);
    cacheUserMemory(strJson);
  } catch (error) {
    throw error;
  }
};

// =======================================================

const getUserStorage = async () => {
  try {
    return await AsyncStorage.getItem(USER_INFO_KEY);
  } catch (error) {
    Logger.err('getUserStorage', {error});
    throw error;
  }
};

const getUserMemory = () => {
  return userMemory;
};

export const getUserAsync = async () => {
  let user = getUserMemory();

  if (user) return user;
  else {
    try {
      return await getUserStorage();
    } catch (error) {
      throw error;
    }
  }
};

// =======================================================

const clearUserStorage = async () => {
  try {
    await AsyncStorage.removeItem(USER_INFO_KEY);
  } catch (error) {
    Logger.err('clearUserStorage', {error});
    throw error;
  }
};

const clearUserMemory = () => {
  userMemory = '';
};

export const clearUserAsync = async () => {
  try {
    await clearUserStorage();
    clearUserMemory();
  } catch (error) {
    throw error;
  }
};
