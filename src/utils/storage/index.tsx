import AsyncStorage from '@react-native-async-storage/async-storage';

export const updateStorage = async (name: string, value: any) => {
  try {
    const result = await AsyncStorage.setItem(name, JSON.stringify(value));
    return result;
  } catch (e) {
    console.log('gagal menyimpan di localstorage');
  }
};

export const getStorage = async (name: string) => {
  try {
    const value = await AsyncStorage.getItem(name);

    return value !== null ? JSON.parse(value) : null;
  } catch (e) {
    console.log('gagal mengambil di localstorage');
  }
};

export const removeStorage = async (name: string) => {
  try {
    const value: any = await AsyncStorage.removeItem(name);

    return value !== null ? JSON.parse(value) : null;
  } catch (e) {
    console.log('gagal mengambil di localstorage');
  }
};
