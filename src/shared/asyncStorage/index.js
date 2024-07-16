import AsyncStorage from '@react-native-community/async-storage';

/**
 *
 * @param key Key value of the object to be saved
 * @param object The Object to save
 * @param ttl (Optional) set an expiration date on an object in ms
 * @return {Promise<void>}
 */
export const setObjectForKey = async ({key, object, ttl = undefined}) => {
  if (!key) {
    throw new Error('Cannot set an object without a key');
  }

  if (!object) {
    throw new Error('Cannot set a key without an object');
  }

  let expiresAt;
  if (ttl) {
    expiresAt = new Date().getTime() + ttl;
  }
  let wrappedObj = {
    object,
    expiresAt,
  };
  let stringedWrapper = JSON.stringify(wrappedObj);

  return await AsyncStorage.setItem(key, stringedWrapper);
};

/**
 *
 * @param key The key of the object to remove
 * @return {Promise<void>}
 */
export const removeObjectForKey = async key => {
  return await AsyncStorage.removeItem(key);
};

/**
 *
 * @param key The key of the object to retrieve
 * @return {Promise<*>}
 */
export const getObjectForKey = async key => {
  let now = new Date().getTime();
  let stringedWrapper = await AsyncStorage.getItem(key);
  if (!stringedWrapper) {
    // throw new Error('No key found for object');
    return null;
  }

  let wrapper = JSON.parse(stringedWrapper);
  if (wrapper && Number(wrapper.expiresAt) < now) {
    // Object expired
    AsyncStorage.removeItem(key);
    throw new Error('Object expired');
  } else {
    return wrapper.object;
  }
};
