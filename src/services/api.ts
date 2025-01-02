import axios from 'axios';
import { Hadith } from '../types/hadith';

const HADITH_API_URL = 'https://api.hadith.gading.dev/books/muslim';
const QURAN_API_URL = 'https://api.alquran.cloud/v1/verse/random';

export const fetchDailyHadith = async (): Promise<Hadith> => {
  try {
    const response = await axios.get(`${HADITH_API_URL}/random`);
    if (!response.data?.data) {
      throw new Error('Invalid response format');
    }
    return {
      text: response.data.data.text || 'The best among you is the one who learns the Quran and teaches it.',
      narrator: response.data.data.narrator || 'Sahih Al-Bukhari'
    };
  } catch (error) {
    console.error('Error fetching hadith:', error);
    // Return fallback content instead of throwing
    return {
      text: 'The best among you is the one who learns the Quran and teaches it.',
      narrator: 'Sahih Al-Bukhari'
    };
  }
};

export const fetchDailyVerse = async () => {
  try {
    const response = await axios.get(QURAN_API_URL);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching verse:', error);
    return null;
  }
};