import axios from 'axios';

interface PrayerTimes {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

export const fetchPrayerTimes = async (latitude: number, longitude: number): Promise<PrayerTimes> => {
  try {
    const response = await axios.get(
      `https://api.aladhan.com/v1/timings/${Date.now()/1000}?latitude=${latitude}&longitude=${longitude}&method=2`
    );
    
    return {
      fajr: response.data.data.timings.Fajr,
      dhuhr: response.data.data.timings.Dhuhr,
      asr: response.data.data.timings.Asr,
      maghrib: response.data.data.timings.Maghrib,
      isha: response.data.data.timings.Isha
    };
  } catch (error) {
    console.error('Error fetching prayer times:', error);
    throw error;
  }
};